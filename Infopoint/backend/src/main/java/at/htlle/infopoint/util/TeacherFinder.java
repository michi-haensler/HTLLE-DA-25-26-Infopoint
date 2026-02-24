package at.htlle.infopoint.util;

import at.htlle.infopoint.clients.webuntis.CurrentLesson;
import at.htlle.infopoint.dto.TeacherDayDTO;
import at.htlle.infopoint.dto.TeacherInfoDTO;
import at.htlle.infopoint.dto.TeacherLessonDTO;
import com.fasterxml.jackson.databind.JsonNode;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

public class TeacherFinder {

    public static List<TeacherInfoDTO> search(
            JsonNode root,
            String query
    ) {
        List<TeacherInfoDTO> results = new ArrayList<>();
        
        if (root == null) {
            return results;
        }
        
        JsonNode payload = root.get("payload");
        if (payload == null) {
            return results;
        }
        
        JsonNode rows = payload.get("rows");
        if (rows == null || !rows.isArray()) {
            return results;
        }

        String q = query.toLowerCase();
        int now = ConvertToUntisTimeUtil.nowAsUntisTime();

        for (JsonNode row : rows) {
            JsonNode headerNode = row.get("header");
            if (headerNode == null) continue;
            
            String header = headerNode.asText();
            TeacherInfoDTO info = TeacherHeaderParser.parse(header);

            if (!(info.fullHeader().toLowerCase().contains(q)
                    || info.shortCode().toLowerCase().contains(q)
                    || info.lastName().toLowerCase().contains(q)
                    || info.firstName().toLowerCase().contains(q))) {
                continue;
            }

            CurrentLesson currentLesson = null;

            JsonNode cells = row.get("cells");
            if (cells != null && cells.isArray()) {
                for (JsonNode cell : cells) {
                    JsonNode periods = cell.get("periods");
                    if (periods == null || !periods.isArray()) continue;
                    
                    for (JsonNode period : periods) {
                        if (period.path("isCancelled").asBoolean(false)) continue;

                        int start = period.path("startTime").asInt(0);
                        int end = period.path("endTime").asInt(0);

                        if (now >= start && now < end) {
                            currentLesson = new CurrentLesson(
                                    period.path("subjects").asText(""),
                                    period.path("rooms").asText(""),
                                    period.path("klassen").asText(""),
                                    start,
                                    end
                            );
                            break;
                        }
                    }
                    if (currentLesson != null) break;
                }
            }

            results.add(new TeacherInfoDTO(
                    header,
                    info.lastName(),
                    info.firstName(),
                    info.shortCode(),
                    currentLesson
            ));
        }

        return results;
    }

    public static Optional<TeacherDayDTO> findTeacherDay(
            JsonNode root,
            String shortCode
    ) {
        if (root == null) {
            return Optional.empty();
        }

        JsonNode payload = root.get("payload");
        if (payload == null) {
            return Optional.empty();
        }

        JsonNode rows = payload.get("rows");
        if (rows == null || !rows.isArray()) {
            return Optional.empty();
        }

        String wanted = shortCode == null ? "" : shortCode.trim().toLowerCase();
        if (wanted.isEmpty()) {
            return Optional.empty();
        }

        int now = ConvertToUntisTimeUtil.nowAsUntisTime();

        for (JsonNode row : rows) {
            JsonNode headerNode = row.get("header");
            if (headerNode == null) continue;

            String header = headerNode.asText();
            TeacherInfoDTO info = TeacherHeaderParser.parse(header);

            if (!info.shortCode().equalsIgnoreCase(wanted)) {
                continue;
            }

            List<TeacherLessonDTO> lessons = new ArrayList<>();
            TeacherLessonDTO currentLesson = null;

            JsonNode cells = row.get("cells");
            if (cells != null && cells.isArray()) {
                for (JsonNode cell : cells) {
                    JsonNode periods = cell.get("periods");
                    if (periods == null || !periods.isArray()) continue;

                    for (JsonNode period : periods) {
                        boolean cancelled = period.path("isCancelled").asBoolean(false);
                        int start = period.path("startTime").asInt(0);
                        int end = period.path("endTime").asInt(0);

                        TeacherLessonDTO lesson = new TeacherLessonDTO(
                                period.path("subjects").asText(""),
                                period.path("rooms").asText(""),
                                period.path("klassen").asText(""),
                                start,
                                end,
                                cancelled
                        );
                        lessons.add(lesson);

                        if (!cancelled && now >= start && now < end) {
                            currentLesson = lesson;
                        }
                    }
                }
            }

            lessons.sort(Comparator.comparingInt(TeacherLessonDTO::startTime));

            return Optional.of(new TeacherDayDTO(
                    info.fullHeader(),
                    info.lastName(),
                    info.firstName(),
                    info.shortCode(),
                    currentLesson,
                    lessons
            ));
        }

        return Optional.empty();
    }
}

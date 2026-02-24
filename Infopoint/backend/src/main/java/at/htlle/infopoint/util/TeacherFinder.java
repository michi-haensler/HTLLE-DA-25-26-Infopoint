package at.htlle.infopoint.util;

import at.htlle.infopoint.clients.webuntis.CurrentLesson;
import at.htlle.infopoint.dto.TeacherDayDTO;
import at.htlle.infopoint.dto.TeacherInfoDTO;
import at.htlle.infopoint.dto.TeacherLessonDTO;
import com.fasterxml.jackson.databind.JsonNode;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public class TeacherFinder {
    private static final String[] SUBJECT_KEYS = new String[] {
            "subjects",
            "lessonText",
            "lstext",
            "text",
            "substText",
            "activityType",
            "code"
    };

    private static String firstNonBlank(JsonNode node, String... keys) {
        for (String key : keys) {
            String value = node.path(key).asText("");
            if (!value.isBlank()) {
                return value.trim();
            }
        }
        return "";
    }

    private static String extractRowEventText(JsonNode row) {
        JsonNode cells = row.get("cells");
        if (cells == null || !cells.isArray()) {
            return "";
        }

        Set<String> labels = new LinkedHashSet<>();
        for (JsonNode cell : cells) {
            boolean isEvent = cell.path("isEvent").asBoolean(false);
            String text = cell.path("text").asText("").trim();
            if (isEvent && !text.isBlank()) {
                labels.add(text);
            }
        }

        return String.join(" / ", labels);
    }

    private static String resolveSubject(JsonNode period, String rowEventText) {
        String subject = firstNonBlank(period, SUBJECT_KEYS);
        if (!subject.isBlank()) {
            return subject;
        }

        boolean irregular = period.path("isIrregular").asBoolean(false);
        if (irregular && !rowEventText.isBlank()) {
            return rowEventText;
        }

        return subject;
    }

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
            String rowEventText = extractRowEventText(row);

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
                                    resolveSubject(period, rowEventText),
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
            String rowEventText = extractRowEventText(row);

            JsonNode cells = row.get("cells");
            if (cells != null && cells.isArray()) {
                for (JsonNode cell : cells) {
                    JsonNode periods = cell.get("periods");
                    if (periods == null || !periods.isArray()) continue;

                    for (JsonNode period : periods) {
                        boolean cancelled = period.path("isCancelled").asBoolean(false);
                        boolean irregular = period.path("isIrregular").asBoolean(false);
                        int start = period.path("startTime").asInt(0);
                        int end = period.path("endTime").asInt(0);

                        TeacherLessonDTO lesson = new TeacherLessonDTO(
                                resolveSubject(period, rowEventText),
                                period.path("rooms").asText(""),
                                period.path("klassen").asText(""),
                                start,
                                end,
                                cancelled,
                                irregular
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

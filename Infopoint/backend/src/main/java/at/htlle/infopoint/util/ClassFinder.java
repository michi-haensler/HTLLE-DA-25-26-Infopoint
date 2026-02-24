package at.htlle.infopoint.util;

import at.htlle.infopoint.clients.webuntis.CurrentLesson;
import at.htlle.infopoint.dto.ClassDayDTO;
import at.htlle.infopoint.dto.ClassInfoDTO;
import at.htlle.infopoint.dto.ClassLessonDTO;
import com.fasterxml.jackson.databind.JsonNode;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

/**
 * Utility-Klasse zum Suchen und Parsen von Klasseninformationen
 * aus der WebUntis-Tagesübersicht (analog zu TeacherFinder).
 */
public class ClassFinder {

    /**
     * Durchsucht die WebUntis-Daten nach Klassen.
     * 
     * @param root  JSON-Daten von getClassOverview
     * @param query Suchbegriff (Klassenname)
     * @return Liste der gefundenen Klassen
     */
    public static List<ClassInfoDTO> search(JsonNode root, String query) {
        List<ClassInfoDTO> results = new ArrayList<>();

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

            String header = headerNode.asText().trim();
            
            // Klassenname ist üblicherweise direkt im Header
            String className = header;
            String shortCode = header;
            
            // Suche nach Übereinstimmung
            if (!className.toLowerCase().contains(q)) {
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
                                    period.path("teachers").asText(""), // Bei Klassen: Lehrer statt Klassen
                                    start,
                                    end
                            );
                            break;
                        }
                    }
                    if (currentLesson != null) break;
                }
            }

            results.add(new ClassInfoDTO(
                    className,
                    header,
                    shortCode,
                    currentLesson
            ));
        }

        return results;
    }

    /**
     * Holt alle Klassen ohne Filterung.
     * 
     * @param root JSON-Daten von getClassOverview
     * @return Liste aller Klassen
     */
    public static List<ClassInfoDTO> getAll(JsonNode root) {
        List<ClassInfoDTO> results = new ArrayList<>();

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

        int now = ConvertToUntisTimeUtil.nowAsUntisTime();

        for (JsonNode row : rows) {
            JsonNode headerNode = row.get("header");
            if (headerNode == null) continue;

            String header = headerNode.asText().trim();
            String className = header;
            String shortCode = header;

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
                                    period.path("teachers").asText(""),
                                    start,
                                    end
                            );
                            break;
                        }
                    }
                    if (currentLesson != null) break;
                }
            }

            results.add(new ClassInfoDTO(
                    className,
                    header,
                    shortCode,
                    currentLesson
            ));
        }

        return results;
    }

    public static Optional<ClassDayDTO> findClassDay(JsonNode root, String shortCode) {
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

            String header = headerNode.asText().trim();
            if (!header.equalsIgnoreCase(wanted)) {
                continue;
            }

            List<ClassLessonDTO> lessons = new ArrayList<>();
            ClassLessonDTO currentLesson = null;

            JsonNode cells = row.get("cells");
            if (cells != null && cells.isArray()) {
                for (JsonNode cell : cells) {
                    JsonNode periods = cell.get("periods");
                    if (periods == null || !periods.isArray()) continue;

                    for (JsonNode period : periods) {
                        boolean cancelled = period.path("isCancelled").asBoolean(false);
                        int start = period.path("startTime").asInt(0);
                        int end = period.path("endTime").asInt(0);

                        ClassLessonDTO lesson = new ClassLessonDTO(
                                period.path("subjects").asText(""),
                                period.path("rooms").asText(""),
                                period.path("teachers").asText(""),
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

            lessons.sort(Comparator.comparingInt(ClassLessonDTO::startTime));

            return Optional.of(new ClassDayDTO(
                    header,
                    header,
                    header,
                    currentLesson,
                    lessons
            ));
        }

        return Optional.empty();
    }
}

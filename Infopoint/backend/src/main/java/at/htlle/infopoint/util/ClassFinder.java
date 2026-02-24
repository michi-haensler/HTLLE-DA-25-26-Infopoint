package at.htlle.infopoint.util;

import at.htlle.infopoint.clients.webuntis.CurrentLesson;
import at.htlle.infopoint.dto.ClassDayDTO;
import at.htlle.infopoint.dto.ClassInfoDTO;
import at.htlle.infopoint.dto.ClassLessonDTO;
import com.fasterxml.jackson.databind.JsonNode;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * Utility-Klasse zum Suchen und Parsen von Klasseninformationen
 * aus der WebUntis-Tagesübersicht (analog zu TeacherFinder).
 */
public class ClassFinder {
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
        String subject = period.path("subjects").asText("").trim();
        if (!subject.isBlank()) {
            return subject;
        }

        boolean irregular = period.path("isIrregular").asBoolean(false);
        if (irregular && !rowEventText.isBlank()) {
            return rowEventText;
        }

        return subject;
    }

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
            String rowEventText = extractRowEventText(row);
            
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
                                    resolveSubject(period, rowEventText),
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

            if (currentLesson == null && !rowEventText.isBlank()) {
                currentLesson = new CurrentLesson(
                        rowEventText,
                        "",
                        "",
                        0,
                        2359
                );
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
            String rowEventText = extractRowEventText(row);

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
                                    resolveSubject(period, rowEventText),
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

            if (currentLesson == null && !rowEventText.isBlank()) {
                currentLesson = new CurrentLesson(
                        rowEventText,
                        "",
                        "",
                        0,
                        2359
                );
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
            String rowEventText = extractRowEventText(row);
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
                        boolean irregular = period.path("isIrregular").asBoolean(false);
                        int start = period.path("startTime").asInt(0);
                        int end = period.path("endTime").asInt(0);
                        String subject = resolveSubject(period, rowEventText);
                        boolean event = irregular && !rowEventText.isBlank() && subject.equals(rowEventText);

                        ClassLessonDTO lesson = new ClassLessonDTO(
                                subject,
                                period.path("rooms").asText(""),
                                period.path("teachers").asText(""),
                                start,
                                end,
                                cancelled,
                                irregular,
                                event
                        );
                        lessons.add(lesson);

                        if (!cancelled && now >= start && now < end) {
                            currentLesson = lesson;
                        }
                    }
                }
            }

            if (lessons.isEmpty() && !rowEventText.isBlank()) {
                ClassLessonDTO eventLesson = new ClassLessonDTO(
                        rowEventText,
                        "",
                        "",
                        0,
                        2359,
                        false,
                        true,
                        true
                );
                lessons.add(eventLesson);
                currentLesson = eventLesson;
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

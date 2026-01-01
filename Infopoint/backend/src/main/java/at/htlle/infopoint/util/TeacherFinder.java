package at.htlle.infopoint.util;

import at.htlle.infopoint.clients.webuntis.CurrentLesson;
import at.htlle.infopoint.dto.TeacherInfoDTO;
import com.fasterxml.jackson.databind.JsonNode;

import java.util.ArrayList;
import java.util.List;

public class TeacherFinder {

    public static List<TeacherInfoDTO> search(
            JsonNode root,
            String query
    ) {
        String q = query.toLowerCase();
        int now = ConvertToUntisTimeUtil.nowAsUntisTime();

        List<TeacherInfoDTO> results = new ArrayList<>();

        JsonNode rows = root.get("payload").get("rows");

        for (JsonNode row : rows) {
            String header = row.get("header").asText();
            TeacherInfoDTO info = TeacherHeaderParser.parse(header);

            if (!(info.fullHeader().toLowerCase().contains(q)
                    || info.shortCode().toLowerCase().contains(q)
                    || info.lastName().toLowerCase().contains(q)
                    || info.firstName().toLowerCase().contains(q))) {
                continue;
            }

            CurrentLesson currentLesson = null;

            for (JsonNode cell : row.get("cells")) {
                for (JsonNode period : cell.get("periods")) {

                    if (period.path("isCancelled").asBoolean(false)) continue;

                    int start = period.get("startTime").asInt();
                    int end = period.get("endTime").asInt();

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

//            CurrentLesson defaultLesson = new CurrentLesson("Not Found", "Not Found", "Not Found", 0, 0);

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


}


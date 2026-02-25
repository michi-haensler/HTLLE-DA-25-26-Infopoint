package at.htlle.infopoint.clients.webuntis;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeParseException;
import java.util.Map;

@Component
@SuppressWarnings("null")
public class WebUntisClient {

    private static final Logger log = LoggerFactory.getLogger(WebUntisClient.class);
    private final WebClient webClient;

    public WebUntisClient(WebClient.Builder webClient) {
        this.webClient = webClient
                .baseUrl("https://htlleoben.webuntis.com/WebUntis")
                .build();
    }

    public JsonNode getDayOverview(String date) {
        return safeFetchDayOverview(normalizeDate(date), "Tagesübersicht Lehre");
    }

    /**
     * Holt die Tagesübersicht für Klassen von WebUntis.
     * Format: "Tagesübersicht Klassen" (analog zu Lehrerübersicht)
     */
    public JsonNode getClassOverview(String date) {
        String normalizedDate = normalizeDate(date);
        try {
            return safeFetchDayOverview(normalizedDate, "Tagesübersicht Klass");
        } catch (Exception ignored) {
            return safeFetchDayOverview(normalizedDate, "Tagesübersicht Klassen");
        }
    }

    private JsonNode safeFetchDayOverview(String date, String format) {
        try {
            JsonNode response = fetchDayOverviewByFormat(date, format);
            return response == null ? emptyPayload() : response;
        } catch (Exception ex) {
            log.warn("WebUntis dayoverview failed for format '{}' and date '{}': {}", format, date, ex.toString());
            return emptyPayload();
        }
    }

    private JsonNode fetchDayOverviewByFormat(String date, String format) {
        Map<String, String> requestBody = Map.of(
                "date", date,
                "format", format
        );
        return webClient
                .post()
                .uri(uriBuilder -> uriBuilder
                        .path("/monitor/dayoverview/data")
                        .queryParam("school", "htlleoben")
                        .build()
                )
                .header("X-Requested-With", "XMLHttpRequest")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(JsonNode.class)
                .block();
    }

    private String normalizeDate(String date) {
        String fallback = LocalDate.now(ZoneId.of("Europe/Vienna")).toString();
        if (date == null || date.isBlank()) {
            return fallback;
        }
        try {
            return LocalDate.parse(date).toString();
        } catch (DateTimeParseException ex) {
            log.warn("Invalid date '{}' for WebUntis request, fallback to '{}'", date, fallback);
            return fallback;
        }
    }

    private JsonNode emptyPayload() {
        JsonNodeFactory factory = JsonNodeFactory.instance;
        ObjectNode root = factory.objectNode();
        ObjectNode payload = factory.objectNode();
        ArrayNode rows = factory.arrayNode();
        payload.set("rows", rows);
        root.set("payload", payload);
        return root;
    }
}

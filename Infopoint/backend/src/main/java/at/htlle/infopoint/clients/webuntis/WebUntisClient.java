package at.htlle.infopoint.clients.webuntis;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Component
@SuppressWarnings("null")
public class WebUntisClient {

    private final WebClient webClient;

    public WebUntisClient(WebClient.Builder webClient) {
        this.webClient = webClient
                .baseUrl("https://htlleoben.webuntis.com/WebUntis")
                .build();
    }

    public JsonNode getDayOverview(String date) {
        Map<String, String> requestBody = Map.of(
                "date", date,
                "format", "Tagesübersicht Lehre"
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

    /**
     * Holt die Tagesübersicht für Klassen von WebUntis.
     * Format: "Tagesübersicht Klassen" (analog zu Lehrerübersicht)
     */
    public JsonNode getClassOverview(String date) {
        Map<String, String> requestBody = Map.of(
                "date", date,
                "format", "Tagesübersicht Klassen"
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
}

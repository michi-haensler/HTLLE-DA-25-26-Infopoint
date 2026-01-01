package at.htlle.infopoint.clients.webuntis;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Component
public class WebUntisClient {

    private final WebClient webClient;

    public WebUntisClient(WebClient.Builder webClient) {
        this.webClient = webClient
                .baseUrl("https://htlleoben.webuntis.com/WebUntis")
                .build();
    }

    public JsonNode getDayOverview(String date) {
        return webClient
                .post()
                .uri(uriBuilder -> uriBuilder
                        .path("/monitor/dayoverview/data")
                        .queryParam("school", "htlleoben")
                        .build()
                )
                .header("X-Requested-With", "XMLHttpRequest")
                .bodyValue(Map.of(
                        "date", date,
                        "format", "Tagesübersicht Lehre"
                ))
                .retrieve()
                .bodyToMono(JsonNode.class)
                .block();
    }
}

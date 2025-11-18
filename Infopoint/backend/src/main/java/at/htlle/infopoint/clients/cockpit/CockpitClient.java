package at.htlle.infopoint.clients.cockpit;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Component
public class CockpitClient {

    private final WebClient webClient;

    // <-- selbst geschriebener Konstruktor
    public CockpitClient(WebClient webClient) {
        this.webClient = webClient;
    }

    public List<CockpitNews> getNews(int limit) {
        return webClient
                .get()
                .uri("http://localhost:8080/api/content/items/news?limit=" + limit)
                .header("api-key", "API-4411907c14a99505c286559eef0f81979256f987")
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<CockpitNews>>() {})
                .block();
    }

    public List<CockpitEvent> getAppointments(int limit) {
        return webClient
                .get()
                .uri("http://localhost:8081/api/content/items/appointments?limit=" + limit)
                .retrieve()
                .bodyToMono(CockpitEventResponse.class)
                .block()
                .entries();
    }

    public byte[] getMapImage() {
        return webClient
                .get()
                .uri("http://localhost:8081/storage/uploads/map.png")
                .retrieve()
                .bodyToMono(byte[].class)
                .block();
    }
}

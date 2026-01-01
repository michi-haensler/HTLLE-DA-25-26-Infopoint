package at.htlle.infopoint.clients.cockpit;

import org.springframework.core.ParameterizedTypeReference;
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
                .header("api-key", "API-c603802aed1873dbb9ad600f771780aff83a085e")
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

    public String getMapImage() {
        return webClient
                .get()
                .uri("http://localhost:8080/api/assets/image/6910ca4fce0a2ca54f063e5b?m=resize&w=1920&h=1080")
                .header("api-key", "API-c603802aed1873dbb9ad600f771780aff83a085e")
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    public byte[] getMapImageMeta() {
        return webClient
                .get()
                .uri("http://localhost:8080/api/assets/6910ca4fce0a2ca54f063e5b")
                .header("api-key", "API-c603802aed1873dbb9ad600f771780aff83a085e")
                .retrieve()
                .bodyToMono(byte[].class)
                .block();
    }
}

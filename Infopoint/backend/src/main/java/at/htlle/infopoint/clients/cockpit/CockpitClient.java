package at.htlle.infopoint.clients.cockpit;

import at.htlle.infopoint.config.CockpitConfig;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Component
public class CockpitClient {

    private final WebClient webClient;
    private final CockpitConfig cockpitConfig;

    public CockpitClient(WebClient.Builder builder, CockpitConfig cockpitConfig) {
        this.webClient = builder.build();
        this.cockpitConfig = cockpitConfig;
    }

    public List<CockpitNews> getNews(int limit) {
        return webClient
                .get()
                .uri(cockpitConfig.getUrl() + "/api/content/items/news?limit=" + limit)
                .header("api-key", cockpitConfig.getApiKey())
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<CockpitNews>>() {})
                .block();
    }

    public List<CockpitEvent> getAppointments(int limit) {
        return webClient
                .get()
                .uri(cockpitConfig.getUrl() + "/api/content/items/appointments?limit=" + limit)
                .header("api-key", cockpitConfig.getApiKey())
                .retrieve()
                .bodyToMono(CockpitEventResponse.class)
                .block()
                .entries();
    }

    public String getMapImage() {
        return webClient
                .get()
                .uri(cockpitConfig.getUrl() + "/api/assets/image/6910ca4fce0a2ca54f063e5b?m=resize&w=1920&h=1080")
                .header("api-key", cockpitConfig.getApiKey())
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    public byte[] getMapImageMeta() {
        return webClient
                .get()
                .uri(cockpitConfig.getUrl() + "/api/assets/6910ca4fce0a2ca54f063e5b")
                .header("api-key", cockpitConfig.getApiKey())
                .retrieve()
                .bodyToMono(byte[].class)
                .block();
    }
}

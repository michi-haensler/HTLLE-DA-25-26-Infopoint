package at.htlle.infopoint.clients.cockpit;

import at.htlle.infopoint.config.CockpitConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Component
public class CockpitClient {

    private static final Logger log = LoggerFactory.getLogger(CockpitClient.class);
    private final WebClient webClient;
    private final CockpitConfig cockpitConfig;

    public CockpitClient(WebClient.Builder builder, CockpitConfig cockpitConfig) {
        this.webClient = builder
                .codecs(configurer -> configurer
                        .defaultCodecs()
                        .maxInMemorySize(16 * 1024 * 1024)) // 16MB für große Bilder
                .build();
        this.cockpitConfig = cockpitConfig;
    }

    public List<CockpitNews> getNews(int limit) {
        try {
            return webClient
                    .get()
                    .uri(cockpitConfig.getUrl() + "/api/content/items/news?limit=" + limit)
                    .header("api-key", cockpitConfig.getApiKey())
                    .header("Host", "localhost")
                    .retrieve()
                    .bodyToMono(new ParameterizedTypeReference<List<CockpitNews>>() {})
                    .block();
        } catch (WebClientResponseException e) {
            return List.of();
        }
    }

    public CockpitNews getNewsById(String id) {
        try {
            return webClient
                    .get()
                    .uri(cockpitConfig.getUrl() + "/api/content/item/news/" + id)
                    .header("api-key", cockpitConfig.getApiKey())
                    .header("Host", "localhost")
                    .retrieve()
                    .bodyToMono(CockpitNews.class)
                    .block();
        } catch (WebClientResponseException e) {
            return null;
        }
    }

    public List<CockpitEvent> getAppointments(int limit) {
        try {
            return webClient
                    .get()
                    .uri(cockpitConfig.getUrl() + "/api/content/items/events?limit=" + limit)
                    .header("api-key", cockpitConfig.getApiKey())
                    .header("Host", "localhost")
                    .retrieve()
                    .bodyToMono(new ParameterizedTypeReference<List<CockpitEvent>>() {})
                    .block();
        } catch (WebClientResponseException e) {
            return List.of();
        }
    }

    public String getMapImage() {
        try {
            return webClient
                    .get()
                    .uri(cockpitConfig.getUrl() + "/api/assets/image/6910ca4fce0a2ca54f063e5b?m=resize&w=1920&h=1080")
                    .header("api-key", cockpitConfig.getApiKey())
                    .header("Host", "localhost")
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();
        } catch (WebClientResponseException e) {
            return null;
        }
    }

    public byte[] getMapImageMeta() {
        try {
            return webClient
                    .get()
                    .uri(cockpitConfig.getUrl() + "/api/assets/6910ca4fce0a2ca54f063e5b")
                    .header("api-key", cockpitConfig.getApiKey())
                    .header("Host", "localhost")
                    .retrieve()
                    .bodyToMono(byte[].class)
                    .block();
        } catch (WebClientResponseException e) {
            return null;
        }
    }

    public List<CockpitMap> getMaps() {
        try {
            return webClient
                    .get()
                    .uri(URI.create(cockpitConfig.getUrl() + "/api/content/items/maps"))
                    .header("api-key", cockpitConfig.getApiKey())
                    .header("Host", "localhost")
                    .retrieve()
                    .bodyToMono(new ParameterizedTypeReference<List<CockpitMap>>() {})
                    .block();
        } catch (WebClientResponseException e) {
            return List.of();
        } catch (Exception e) {
            return List.of();
        }
    }

    public CockpitMap getMapByFloor(String floor) {
        try {
            String encodedFilter = URLEncoder.encode("{\"floor\":\"" + floor + "\"}", StandardCharsets.UTF_8);
            List<CockpitMap> maps = webClient
                    .get()
                    .uri(URI.create(cockpitConfig.getUrl() + "/api/content/items/maps?filter=" + encodedFilter))
                    .header("api-key", cockpitConfig.getApiKey())
                    .header("Host", "localhost")
                    .retrieve()
                    .bodyToMono(new ParameterizedTypeReference<List<CockpitMap>>() {})
                    .block();
            return (maps != null && !maps.isEmpty()) ? maps.get(0) : null;
        } catch (WebClientResponseException e) {
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public byte[] getImageByPath(String path) {
        String url = cockpitConfig.getUrl() + "/storage/uploads" + path;
        log.info("getImageByPath: Fetching image from URL: {}", url);
        try {
            byte[] result = webClient
                    .get()
                    .uri(URI.create(url))
                    .header("Host", "localhost")
                    .retrieve()
                    .bodyToMono(byte[].class)
                    .block();
            log.info("getImageByPath: Received {} bytes", result != null ? result.length : "null");
            return result;
        } catch (WebClientResponseException e) {
            log.error("getImageByPath WebClientResponseException: {} - {}", e.getStatusCode(), e.getMessage());
            return null;
        } catch (Exception e) {
            log.error("getImageByPath Exception: ", e);
            return null;
        }
    }

    /**
     * Holt alle Labor-Stundenpläne aus dem CMS.
     */
    public List<CockpitLaborPlan> getLaborPlaene() {
        try {
            return webClient
                    .get()
                    .uri(URI.create(cockpitConfig.getUrl() + "/api/content/items/laborplaene"))
                    .header("api-key", cockpitConfig.getApiKey())
                    .header("Host", "localhost")
                    .retrieve()
                    .bodyToMono(new ParameterizedTypeReference<List<CockpitLaborPlan>>() {})
                    .block();
        } catch (WebClientResponseException e) {
            log.error("getLaborPlaene error: {}", e.getMessage());
            return List.of();
        } catch (Exception e) {
            log.error("getLaborPlaene exception: ", e);
            return List.of();
        }
    }

    /**
     * Holt einen Labor-Stundenplan anhand der ID.
     */
    public CockpitLaborPlan getLaborPlanById(String id) {
        try {
            return webClient
                    .get()
                    .uri(URI.create(cockpitConfig.getUrl() + "/api/content/item/laborplaene/" + id))
                    .header("api-key", cockpitConfig.getApiKey())
                    .header("Host", "localhost")
                    .retrieve()
                    .bodyToMono(CockpitLaborPlan.class)
                    .block();
        } catch (WebClientResponseException e) {
            log.error("getLaborPlanById error: {}", e.getMessage());
            return null;
        } catch (Exception e) {
            log.error("getLaborPlanById exception: ", e);
            return null;
        }
    }
}

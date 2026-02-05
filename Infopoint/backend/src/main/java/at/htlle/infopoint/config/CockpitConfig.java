package at.htlle.infopoint.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "cockpit")
public class CockpitConfig {

    private String url = "http://localhost:8080";
    private String apiKey = "API-c603802aed1873dbb9ad600f771780aff83a085e";

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }
}

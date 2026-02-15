package at.htlle.infopoint.clients.cockpit;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public record CockpitNews(
        @JsonProperty("_id") String _id,
        @JsonAlias({"title", "News Name"}) String title,
        String teaser,
        String content,
        CockpitImage image
) {}


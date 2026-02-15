package at.htlle.infopoint.clients.cockpit;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public record CockpitImage(
        @JsonProperty("_id") String _id,
        String path,
        String title,
        String mime,
        String description
) {}

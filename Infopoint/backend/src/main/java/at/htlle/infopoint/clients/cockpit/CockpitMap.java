package at.htlle.infopoint.clients.cockpit;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public record CockpitMap(
        @JsonProperty("_id") String _id,
        String floor,
        String label,
        CockpitImage image,
        Integer sortOrder
) {}

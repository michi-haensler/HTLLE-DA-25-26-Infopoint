package at.htlle.infopoint.dto;

import java.time.Instant;

/**
 * Event oder Termin aus dem CMS.
 */
public record EventDto(
        Long id,
        String title,
        Instant start,
        Instant end,
        String location,
        String type,
        String description,
        String imageUrl
) {}

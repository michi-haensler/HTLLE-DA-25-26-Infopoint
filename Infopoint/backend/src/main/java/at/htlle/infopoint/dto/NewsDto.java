package at.htlle.infopoint.dto;

import java.time.Instant;

/**
 * News-Beitrag aus dem CMS (Cockpit).
 */
public record NewsDto(
        Long id,
        String title,
        String teaser,       // kurze Vorschau
        String contentHtml,  // HTML-Inhalt oder Markdown gerendert
        Instant visibleFrom,
        Instant visibleTo,
        String imageUrl,     // CMS-Asset oder Base64
        Instant createdAt
) {}

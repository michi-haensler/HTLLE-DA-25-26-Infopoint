package at.htlle.infopoint.dto;

/**
 * Metadaten zum Lageplan-Bild.
 * Das eigentliche Bild wird über /api/v1/map/image ausgeliefert.
 */
public record MapMetaDto(
        String version,
        Integer width,
        Integer height,
        String mimeType
) {}

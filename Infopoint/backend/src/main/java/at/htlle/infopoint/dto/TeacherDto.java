package at.htlle.infopoint.dto;

/**
 * Repräsentiert einen Lehrer für Dropdowns und Suchergebnisse.
 */
public record TeacherDto(
        Long id,
        String shortCode,   // Kürzel z. B. "MOS"
        String fullName     // Voller Name z. B. "Moser, Simon"
) {}

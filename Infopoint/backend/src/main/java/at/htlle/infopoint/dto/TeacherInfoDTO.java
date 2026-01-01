package at.htlle.infopoint.dto;

import at.htlle.infopoint.clients.webuntis.CurrentLesson;
import org.springframework.lang.Nullable;

/**
 * Repräsentiert einen Lehrer für Dropdowns und Suchergebnisse.
 */
public record TeacherInfoDTO(
        String fullHeader,
        String lastName,
        String firstName,
        String shortCode,
        CurrentLesson currentSubject
) {}


package at.htlle.infopoint.dto;

import java.time.Instant;

/**
 * Zeigt den aktuellen Aufenthaltsort eines Lehrers laut Stundenplan.
 */
public record PresenceDto(
        Long teacherId,
        String teacherName,
        Instant at,          // Zeitpunkt der Abfrage
        Long roomId,
        String roomCode,
        String subject        // aktuelles Fach laut Plan
) {}

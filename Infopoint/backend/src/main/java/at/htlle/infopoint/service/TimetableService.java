package at.htlle.infopoint.service;

import at.htlle.infopoint.clients.webuntis.WebUntisClient;
import at.htlle.infopoint.dto.PresenceDto;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class TimetableService {

    //TODO
    //private final WebUntisClient webUntisClient;

    /**
     * Ermittelt für einen Lehrer den voraussichtlichen Aufenthaltsort zum Zeitpunkt 'at'
     * (aus Stundenplan/Substitutions). Mindestens eine der IDs muss gesetzt sein.
     */
    public PresenceDto findPresence(Long teacherId, String shortCode, Instant at) {
        // TODO: Untis DayTable + Substitutions abrufen & mappen
        // Dummy-Fall: Lehrer in Raum B203, Fach "MATH"
        Long resolvedTeacherId = teacherId != null ? teacherId : 42L; // TODO: resolve by shortCode
        String teacherName = "Beispiel, Max";                          // TODO: real name aus Untis
        return new PresenceDto(resolvedTeacherId, teacherName, at,
                2003L, "B203", "MATH");
    }
}

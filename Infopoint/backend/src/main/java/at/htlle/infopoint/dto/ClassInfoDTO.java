package at.htlle.infopoint.dto;

import at.htlle.infopoint.clients.webuntis.CurrentLesson;

/**
 * DTO für Klasseninformationen - analog zu TeacherInfoDTO
 * 
 * @param className     Klassenname (z.B. "5AHWIN")
 * @param fullName      Vollständiger Name (falls vorhanden)
 * @param shortCode     Kurzbezeichnung
 * @param currentLesson Aktuelle Unterrichtsstunde (falls vorhanden)
 */
public record ClassInfoDTO(
        String className,
        String fullName,
        String shortCode,
        CurrentLesson currentLesson
) {
}

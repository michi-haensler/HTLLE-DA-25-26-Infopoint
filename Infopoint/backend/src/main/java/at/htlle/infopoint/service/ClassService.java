package at.htlle.infopoint.service;

import at.htlle.infopoint.clients.webuntis.WebUntisClient;
import at.htlle.infopoint.dto.ClassInfoDTO;
import at.htlle.infopoint.util.ClassFinder;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service für Klasseninformationen - analog zu TeacherService.
 */
@Service
public class ClassService {

    private final WebUntisClient webUntisClient;

    public ClassService(WebUntisClient webUntisClient) {
        this.webUntisClient = webUntisClient;
    }

    /**
     * Sucht Klassen anhand eines Suchbegriffs.
     * 
     * @param query Suchbegriff (Klassenname)
     * @param date  Datum für die Stundenplanabfrage
     * @return Liste der gefundenen Klassen
     */
    public List<ClassInfoDTO> searchClasses(String query, String date) {
        JsonNode json = webUntisClient.getClassOverview(date);
        return ClassFinder.search(json, query);
    }

    /**
     * Holt alle verfügbaren Klassen.
     * 
     * @param date Datum für die Stundenplanabfrage
     * @return Liste aller Klassen
     */
    public List<ClassInfoDTO> getAllClasses(String date) {
        JsonNode json = webUntisClient.getClassOverview(date);
        return ClassFinder.getAll(json);
    }
}

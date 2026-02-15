package at.htlle.infopoint.controller;

import at.htlle.infopoint.dto.ClassInfoDTO;
import at.htlle.infopoint.service.ClassService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * REST Controller für Klassensuche - analog zu TeacherFinderController.
 */
@RestController
@RequestMapping("/api/v1/class-finder")
public class ClassFinderController {

    private final ClassService classService;

    public ClassFinderController(ClassService classService) {
        this.classService = classService;
    }

    /**
     * Sucht Klassen anhand eines Suchbegriffs.
     * 
     * @param q    Suchbegriff (Klassenname)
     * @param date Datum für die Stundenplanabfrage (Format: YYYY-MM-DD)
     * @return Liste der gefundenen Klassen
     */
    @GetMapping("/search")
    public List<ClassInfoDTO> search(
            @RequestParam String q,
            @RequestParam String date
    ) {
        return classService.searchClasses(q, date);
    }

    /**
     * Holt alle verfügbaren Klassen.
     * 
     * @param date Datum für die Stundenplanabfrage (Format: YYYY-MM-DD)
     * @return Liste aller Klassen
     */
    @GetMapping("/all")
    public List<ClassInfoDTO> getAll(@RequestParam String date) {
        return classService.getAllClasses(date);
    }
}

package at.htlle.infopoint.controller;

import at.htlle.infopoint.clients.cockpit.CockpitLaborPlan;
import at.htlle.infopoint.service.LaborPlanService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller für Labor-Stundenpläne.
 */
@RestController
@RequestMapping("/api/v1/laborplaene")
public class LaborPlanController {

    private final LaborPlanService laborPlanService;

    public LaborPlanController(LaborPlanService laborPlanService) {
        this.laborPlanService = laborPlanService;
    }

    /**
     * Holt alle Labor-Stundenpläne.
     */
    @GetMapping
    public List<CockpitLaborPlan> getAll() {
        return laborPlanService.getAllLaborPlaene();
    }

    /**
     * Sucht Labor-Stundenpläne nach Klassennamen.
     * 
     * @param q Suchbegriff
     */
    @GetMapping("/search")
    public List<CockpitLaborPlan> search(@RequestParam String q) {
        return laborPlanService.searchByClassName(q);
    }

    /**
     * Holt einen Labor-Stundenplan anhand der ID.
     * 
     * @param id Cockpit-ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<CockpitLaborPlan> getById(@PathVariable String id) {
        CockpitLaborPlan plan = laborPlanService.getLaborPlanById(id);
        if (plan == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(plan);
    }

    /**
     * Holt ein Bild aus dem CMS.
     * Der Pfad wird als URL-Parameter übergeben (URL-encoded).
     * 
     * @param path Bild-Pfad (z.B. /2026/02/15/image.jpg)
     */
    @GetMapping(value = "/image", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage(@RequestParam String path) {
        byte[] image = laborPlanService.getImage(path);
        if (image == null || image.length == 0) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(image);
    }
}

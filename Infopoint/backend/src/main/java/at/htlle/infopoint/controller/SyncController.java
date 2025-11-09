package at.htlle.infopoint.controller;

import at.htlle.infopoint.service.SyncService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/sync")
@RequiredArgsConstructor
public class SyncController {

    private final SyncService syncService;

    @PostMapping("/cockpit/news")
    public ResponseEntity<String> syncNews() {
        syncService.syncNews();
        return ResponseEntity.ok("News synchronized");
    }

    @PostMapping("/cockpit/events")
    public ResponseEntity<String> syncEvents() {
        syncService.syncEvents();
        return ResponseEntity.ok("Events synchronized");
    }

    @PostMapping("/cockpit/assets")
    public ResponseEntity<String> syncAssets() {
        syncService.syncAssets();
        return ResponseEntity.ok("Assets synchronized");
    }

    @PostMapping("/untis")
    public ResponseEntity<String> syncUntis() {
        syncService.syncUntis();
        return ResponseEntity.ok("WebUntis data synchronized");
    }
}

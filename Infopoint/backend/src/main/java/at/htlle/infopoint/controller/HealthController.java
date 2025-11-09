package at.htlle.infopoint.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@RequestMapping("/api/v1/health")
public class HealthController {

    @GetMapping
    public ResponseEntity<?> health() {
        return ResponseEntity.ok(
                java.util.Map.of(
                        "status", "ok",
                        "time", Instant.now().toString(),
                        "service", "infopoint-backend"
                )
        );
    }
}

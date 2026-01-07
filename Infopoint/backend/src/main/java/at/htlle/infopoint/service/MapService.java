package at.htlle.infopoint.service;

import at.htlle.infopoint.clients.cockpit.CockpitClient;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class MapService {

    private final CockpitClient cockpitClient;

    public MapService(CockpitClient cockpitClient) {
        this.cockpitClient = cockpitClient;
    }

    // Falls du noch meta() brauchst -> kann bleiben wie es ist
    public byte[] meta() {
        return new byte[0];
    }

    public byte[] loadImageBytesWithFallback() {
        // 1) Versuch: CMS
        try {
            byte[] img = cockpitClient.getMapImageMeta();
            if (img != null && img.length > 0) return img;
        } catch (Exception ignored) {
            // CMS offline -> fallback
        }

        // 2) Fallback: lokales PNG (immer gültig)
        try {
            return new ClassPathResource("static/map-placeholder.png").getContentAsByteArray();
        } catch (IOException e) {
            // Wenn sogar das fehlt, dann ist es ein Setup-Fehler
            throw new RuntimeException("Fallback map-placeholder.png fehlt", e);
        }
    }
}
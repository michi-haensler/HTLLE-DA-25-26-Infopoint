package at.htlle.infopoint.service;

import at.htlle.infopoint.dto.MapMetaDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;

@Service
@RequiredArgsConstructor
public class MapService {

    // private final MapAssetRepository mapAssetRepository; // TODO: DB-Asset holen (BLOB aus H2)
    // private final CockpitClient cockpitClient;           // TODO: Asset aus Cockpit ziehen & speichern

    public MapMetaDto meta() {
        // TODO: real aus DB; Dummy-Werte:
        return new MapMetaDto("v1", 1920, 1080, "image/png");
    }

    /** Kleines Transportobjekt für das Bild (passt zum Controller-Zugriff img.mimeType()/img.bytes()). */
    public record MapImage(String mimeType, byte[] bytes) {}

    public MapImage loadImage() {
        // TODO: aus DB lesen; hier Dummy-PNG (leere Bytes, nur als Platzhalter)
        byte[] bytes = "PNG".getBytes(StandardCharsets.UTF_8);
        return new MapImage("image/png", bytes);
    }
}

package at.htlle.infopoint.service;

import at.htlle.infopoint.clients.cockpit.CockpitClient;
import at.htlle.infopoint.dto.MapMetaDto;
import org.springframework.stereotype.Service;

@Service
public class MapService {

    private final CockpitClient cockpitClient;

    public MapService(CockpitClient cockpitClient) {
        this.cockpitClient = cockpitClient;
    }

    public byte[] meta() {
        // TODO
        return cockpitClient.getMapImageMeta();
    }

    public String loadImage() {
        return cockpitClient.getMapImage();

    }
}

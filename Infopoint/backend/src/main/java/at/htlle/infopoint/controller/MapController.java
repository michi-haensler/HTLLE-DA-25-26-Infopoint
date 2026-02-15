package at.htlle.infopoint.controller;

import at.htlle.infopoint.clients.cockpit.CockpitMap;
import at.htlle.infopoint.service.MapService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/map")
public class MapController {

    private final MapService mapService;

    public MapController(MapService mapService) {
        this.mapService = mapService;
    }

    @GetMapping()
    public List<CockpitMap> getMaps() {
        return mapService.getMaps();
    }

    @GetMapping(value = "/image", produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] image() {
        return mapService.loadImageBytesWithFallback();
    }

    @GetMapping(value = "/image/{floor}", produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] imageByFloor(@PathVariable String floor) {
        return mapService.getMapImageByFloor(floor);
    }
}
package at.htlle.infopoint.controller;

import at.htlle.infopoint.service.MapService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/map")
public class MapController {

    public MapController(MapService mapService) {
        this.mapService = mapService;
    }

    private final MapService mapService;

    @GetMapping
    public byte[] meta() {
        return mapService.meta();
    }

    @GetMapping(value = "/image", produces = {MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE})
    public String image() {
        var img = mapService.loadImage();
        return img;
    }
}

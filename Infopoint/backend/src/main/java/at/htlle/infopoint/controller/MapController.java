package at.htlle.infopoint.controller;

import at.htlle.infopoint.dto.MapMetaDto;
import at.htlle.infopoint.service.MapService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.CacheControl;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/map")
//@RequiredArgsConstructor
public class MapController {

    public MapController(MapService mapService) {
        this.mapService = mapService;
    }

    private final MapService mapService;

    @GetMapping
    public MapMetaDto meta() {
        return mapService.meta();
    }

    @GetMapping(value = "/image", produces = {MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE})
    public ResponseEntity<byte[]> image() {
        var img = mapService.loadImage();
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(img.mimeType()))
                .cacheControl(CacheControl.maxAge(java.time.Duration.ofMinutes(10)).cachePublic())
                .body(img.bytes());
    }
}

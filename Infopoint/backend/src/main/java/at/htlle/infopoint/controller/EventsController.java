package at.htlle.infopoint.controller;

import at.htlle.infopoint.dto.EventDto;
import at.htlle.infopoint.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;

@RestController
@RequestMapping("/api/v1/events")
@RequiredArgsConstructor
public class EventsController {

    private final EventService eventService;

    @GetMapping
    public Page<EventDto> list(
            @RequestParam(required = false) Instant from,
            @RequestParam(required = false) Instant to,
            @RequestParam(required = false) String type,
            @PageableDefault(size = 20) Pageable pageable) {
        return eventService.list(from, to, type, pageable);
    }

    @GetMapping("/{id}")
    public EventDto get(@PathVariable Long id) {
        return eventService.get(id);
    }
}

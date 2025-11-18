package at.htlle.infopoint.controller;

import at.htlle.infopoint.clients.cockpit.CockpitEvent;
import at.htlle.infopoint.dto.EventDto;
import at.htlle.infopoint.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/v1/events")
//@RequiredArgsConstructor
public class EventsController {

    public EventsController(EventService eventService) {
        this.eventService = eventService;
    }

    private final EventService eventService;

    @GetMapping("/{limit}")
    public List<CockpitEvent> get(@PathVariable int limit) {
        return eventService.get(limit);
    }
}

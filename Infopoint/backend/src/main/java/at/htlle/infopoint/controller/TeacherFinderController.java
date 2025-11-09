package at.htlle.infopoint.controller;

import at.htlle.infopoint.dto.PresenceDto;
import at.htlle.infopoint.service.TimetableService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@RequestMapping("/api/v1/teacher-finder")
@RequiredArgsConstructor
public class TeacherFinderController {

    private final TimetableService timetableService;

    @GetMapping("/presence")
    public PresenceDto presence(
            @RequestParam(required = false) Long teacherId,
            @RequestParam(required = false) String shortCode,
            @RequestParam(required = false) Instant at) {
        Instant ts = at != null ? at : Instant.now();
        return timetableService.findPresence(teacherId, shortCode, ts);
    }
}
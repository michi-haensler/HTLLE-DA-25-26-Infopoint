package at.htlle.infopoint.controller;

import at.htlle.infopoint.dto.PresenceDto;
import at.htlle.infopoint.dto.TeacherInfoDTO;
import at.htlle.infopoint.service.TeacherService;
import at.htlle.infopoint.service.TimetableService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/v1/teacher-finder")
public class TeacherFinderController {

    private final TeacherService service;

    public TeacherFinderController(TeacherService service) {
        this.service = service;
    }

    @GetMapping("/search")
    public List<TeacherInfoDTO> search(@RequestParam String q, @RequestParam String date) {
        return service.searchTeachers(q, date);
    }
}
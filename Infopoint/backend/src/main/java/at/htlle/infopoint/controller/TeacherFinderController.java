package at.htlle.infopoint.controller;

import at.htlle.infopoint.dto.TeacherDayDTO;
import at.htlle.infopoint.dto.TeacherInfoDTO;
import at.htlle.infopoint.service.TeacherService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/day")
    public ResponseEntity<TeacherDayDTO> day(@RequestParam String shortCode, @RequestParam String date) {
        return service.getTeacherDay(shortCode, date)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}

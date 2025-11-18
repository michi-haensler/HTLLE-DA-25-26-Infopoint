package at.htlle.infopoint.controller;

import at.htlle.infopoint.dto.TeacherDto;
import at.htlle.infopoint.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/teachers")
//@RequiredArgsConstructor
public class TeachersController {
    private final TeacherService teacherService;

    public TeachersController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping
    public List<TeacherDto> list(@RequestParam(required = false) String query) {
        return teacherService.search(query);
    }
}

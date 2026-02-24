package at.htlle.infopoint.dto;

import java.util.List;

public record TeacherDayDTO(
        String fullHeader,
        String lastName,
        String firstName,
        String shortCode,
        TeacherLessonDTO currentLesson,
        List<TeacherLessonDTO> lessons
) {}

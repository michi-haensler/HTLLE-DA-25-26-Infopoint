package at.htlle.infopoint.dto;

import java.util.List;

public record ClassDayDTO(
        String className,
        String fullName,
        String shortCode,
        ClassLessonDTO currentLesson,
        List<ClassLessonDTO> lessons
) {}

package at.htlle.infopoint.dto;

public record TeacherLessonDTO(
        String subject,
        String room,
        String classes,
        int startTime,
        int endTime,
        boolean cancelled
) {}

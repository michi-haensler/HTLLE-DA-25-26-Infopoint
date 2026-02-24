package at.htlle.infopoint.dto;

public record ClassLessonDTO(
        String subject,
        String room,
        String teachers,
        int startTime,
        int endTime,
        boolean cancelled
) {}

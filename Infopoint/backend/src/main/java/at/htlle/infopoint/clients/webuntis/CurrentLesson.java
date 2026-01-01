package at.htlle.infopoint.clients.webuntis;

public record CurrentLesson(
        String subject,
        String room,
        String classes,
        int startTime,
        int endTime
) {}


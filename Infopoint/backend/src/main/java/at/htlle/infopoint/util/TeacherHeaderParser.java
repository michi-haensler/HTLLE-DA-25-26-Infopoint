package at.htlle.infopoint.util;

import at.htlle.infopoint.clients.webuntis.CurrentLesson;
import at.htlle.infopoint.dto.TeacherInfoDTO;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class TeacherHeaderParser {

    private static final Pattern PATTERN =
            Pattern.compile("(.+?),\\s*(.+?)\\s*\\((.+?)\\)");

    public static TeacherInfoDTO parse(String header) {
        Matcher m = PATTERN.matcher(header);

        CurrentLesson defaultLesson = new CurrentLesson("Not Found", "Not Found", "Not Found", 0, 0);

        if (!m.matches()) {
            return new TeacherInfoDTO(header, "", "", "", defaultLesson);
        }

        return new TeacherInfoDTO(
                header,
                m.group(1).trim(),   // Nachname
                m.group(2).trim(),   // Vorname
                m.group(3).trim(),    // Kürzel
                defaultLesson
        );
    }
}

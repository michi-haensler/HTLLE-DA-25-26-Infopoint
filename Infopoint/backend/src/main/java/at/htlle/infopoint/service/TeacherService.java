package at.htlle.infopoint.service;

import at.htlle.infopoint.dto.TeacherDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class TeacherService {

    // private final WebUntisClient webUntisClient; // TODO
    // Optional: kleiner Memory-Cache

    /** Liefert Lehrerliste (für Dropdown). query=null → alle (ggf. limitieren). */
    public List<TeacherDto> search(String query) {
        // TODO: WebUntis-API + Cache; hier Dummy-Liste:
        var all = Stream.of(
                new TeacherDto(1L, "MEI", "Meyer, Anna"),
                new TeacherDto(2L, "HUB", "Huber, Franz"),
                new TeacherDto(3L, "SCH", "Schmidt, Lara")
        ).toList();

        if (query == null || query.isBlank()) return all;

        String q = query.toLowerCase();
        return all.stream()
                .filter(t -> (t.shortCode() != null && t.shortCode().toLowerCase().contains(q))
                        || (t.fullName() != null && t.fullName().toLowerCase().contains(q)))
                .toList();
    }
}

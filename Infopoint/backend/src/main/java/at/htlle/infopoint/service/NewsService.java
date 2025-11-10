package at.htlle.infopoint.service;

import at.htlle.infopoint.dto.NewsDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsService {

    // private final CockpitClient cockpitClient;         // TODO: Cockpit-Integration

    public Page<NewsDto> list(Instant from, Instant to, Pageable pageable) {
        // TODO: aus DB lesen (sichtbar zwischen from/to), hier Dummy:
        List<NewsDto> data = List.of(
                new NewsDto(1L, "Willkommen",
                        "Kurzinfo", "<p>Start ins Semester</p>",
                        Instant.now().minusSeconds(86400), null,
                        null, Instant.now())
        );
        return new PageImpl<>(data, pageable, data.size());
    }

    public NewsDto get(Long id) {
        // TODO: DB lookup
        return new NewsDto(id, "News #" + id, "Teaser",
                "<p>Inhalt</p>", Instant.now().minusSeconds(3600),
                null, null, Instant.now());
    }
}

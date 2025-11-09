package at.htlle.infopoint.service;

import at.htlle.infopoint.dto.EventDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EventService {

    // private final EventRepository eventRepository;     // TODO
    // private final CockpitClient cockpitClient;         // TODO

    public Page<EventDto> list(Instant from, Instant to, String type, Pageable pageable) {
        // TODO: aus DB filtern (Zeitraum/Typ)
        List<EventDto> data = List.of(
                new EventDto(1L, "Tag der offenen Tür",
                        Instant.now().plusSeconds(7*86400),
                        Instant.now().plusSeconds(7*86400 + 3*3600),
                        "Aula", "School", "Besichtigung & Infos", null)
        );
        return new PageImpl<>(data, pageable, data.size());
    }

    public EventDto get(Long id) {
        // TODO: DB lookup
        return new EventDto(id, "Event #" + id,
                Instant.now().plusSeconds(86400),
                Instant.now().plusSeconds(90000),
                "Hauptgebäude", "General", "Beschreibung", null);
    }
}

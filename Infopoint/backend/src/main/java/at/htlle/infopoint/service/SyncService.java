package at.htlle.infopoint.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SyncService {

    // private final CockpitClient cockpitClient;       // TODO
    // private final NewsRepository newsRepository;     // TODO
    // private final EventRepository eventRepository;   // TODO
    // private final MapAssetRepository mapRepository;  // TODO
    // private final WebUntisClient webUntisClient;     // TODO
    // private final TeacherRepository teacherRepository; // optionaler Cache

    /** Zieht News aus Cockpit und persistiert sie lokal. */
    public void syncNews() {
        // TODO: Pull aus Cockpit → map → upsert in DB
    }

    /** Zieht Events aus Cockpit und persistiert sie lokal. */
    public void syncEvents() {
        // TODO
    }

    /** Aktualisiert Assets (z. B. Lageplan) aus Cockpit in DB (BLOB). */
    public void syncAssets() {
        // TODO
    }

    /** Aktualisiert optionale Untis-Caches (Teacher/Classes/Rooms/Daytables). */
    public void syncUntis() {
        // TODO
    }
}

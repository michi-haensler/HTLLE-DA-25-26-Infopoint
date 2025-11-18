package at.htlle.infopoint.clients.cockpit;

import java.util.List;

public record CockpitEventResponse(
        int total,
        List<CockpitEvent> entries
) {}

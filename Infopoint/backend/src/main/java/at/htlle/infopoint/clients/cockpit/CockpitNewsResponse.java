package at.htlle.infopoint.clients.cockpit;

import java.util.List;

public record CockpitNewsResponse(
        int total,
        List<CockpitNews> entries
) {}

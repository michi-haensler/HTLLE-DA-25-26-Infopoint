package at.htlle.infopoint.clients.cockpit;

public record CockpitEvent(
        String _id,
        String title,
        String start,
        String end,
        String description,
        String image
) {}


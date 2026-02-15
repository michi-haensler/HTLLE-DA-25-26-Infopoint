package at.htlle.infopoint.clients.cockpit;

import java.util.List;

/**
 * DTO für Labor-Stundenplan aus Cockpit CMS.
 * Jede Klasse kann mehrere Bilder haben.
 *
 * @param _id         Cockpit-ID
 * @param className   Name der Klasse (z.B. "5AHWIN")
 * @param description Optionale Beschreibung
 * @param images      Liste der Stundenplan-Bilder
 * @param sortOrder   Sortierreihenfolge
 */
public record CockpitLaborPlan(
        String _id,
        String className,
        String description,
        List<CockpitImage> images,
        Integer sortOrder
) {
}

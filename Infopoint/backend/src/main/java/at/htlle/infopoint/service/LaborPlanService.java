package at.htlle.infopoint.service;

import at.htlle.infopoint.clients.cockpit.CockpitClient;
import at.htlle.infopoint.clients.cockpit.CockpitLaborPlan;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Service für Labor-Stundenpläne.
 */
@Service
public class LaborPlanService {

    private final CockpitClient cockpitClient;

    public LaborPlanService(CockpitClient cockpitClient) {
        this.cockpitClient = cockpitClient;
    }

    /**
     * Holt alle Labor-Stundenpläne.
     */
    public List<CockpitLaborPlan> getAllLaborPlaene() {
        return cockpitClient.getLaborPlaene();
    }

    /**
     * Holt einen Labor-Stundenplan anhand der ID.
     */
    public CockpitLaborPlan getLaborPlanById(String id) {
        return cockpitClient.getLaborPlanById(id);
    }

    /**
     * Sucht Labor-Stundenpläne nach Klassennamen.
     */
    public List<CockpitLaborPlan> searchByClassName(String query) {
        List<CockpitLaborPlan> all = cockpitClient.getLaborPlaene();
        if (all == null || query == null || query.isBlank()) {
            return all != null ? all : List.of();
        }
        
        String q = query.toLowerCase().trim();
        return all.stream()
                .filter(plan -> plan.className() != null && 
                        plan.className().toLowerCase().contains(q))
                .collect(Collectors.toList());
    }

    /**
     * Holt ein Bild anhand des Pfades.
     */
    public byte[] getImage(String path) {
        return cockpitClient.getImageByPath(path);
    }
}

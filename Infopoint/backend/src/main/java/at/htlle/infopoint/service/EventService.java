package at.htlle.infopoint.service;

import at.htlle.infopoint.clients.cockpit.CockpitClient;
import at.htlle.infopoint.clients.cockpit.CockpitEvent;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
//@RequiredArgsConstructor
public class EventService {

    public EventService(CockpitClient cockpitClient) {
        this.cockpitClient = cockpitClient;
    }

    private final CockpitClient cockpitClient;

    public List<CockpitEvent> get(int limit) {
        return cockpitClient.getAppointments(limit);
    }
}

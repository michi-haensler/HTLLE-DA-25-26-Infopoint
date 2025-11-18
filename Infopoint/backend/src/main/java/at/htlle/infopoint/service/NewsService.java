package at.htlle.infopoint.service;

import at.htlle.infopoint.clients.cockpit.CockpitClient;
import at.htlle.infopoint.clients.cockpit.CockpitNews;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
//@RequiredArgsConstructor
public class NewsService {

    public NewsService(CockpitClient cockpitClient) {
        this.cockpitClient = cockpitClient;
    }

    private final CockpitClient cockpitClient;

    public List<CockpitNews> get(int limit) {
        return cockpitClient.getNews(limit);
    }
}

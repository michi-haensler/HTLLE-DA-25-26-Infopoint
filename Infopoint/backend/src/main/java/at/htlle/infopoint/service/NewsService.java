package at.htlle.infopoint.service;

import at.htlle.infopoint.clients.cockpit.CockpitClient;
import at.htlle.infopoint.clients.cockpit.CockpitNews;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {

    private final CockpitClient cockpitClient;

    public NewsService(CockpitClient cockpitClient) {
        this.cockpitClient = cockpitClient;
    }

    public List<CockpitNews> get(int limit) {
        return cockpitClient.getNews(limit);
    }

    public CockpitNews getById(String id) {
        return cockpitClient.getNewsById(id);
    }
}

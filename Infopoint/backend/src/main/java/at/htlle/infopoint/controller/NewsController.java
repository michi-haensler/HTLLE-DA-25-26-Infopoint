package at.htlle.infopoint.controller;

import at.htlle.infopoint.clients.cockpit.CockpitNews;
import at.htlle.infopoint.service.NewsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/news")
public class NewsController {

    private final NewsService newsService;

    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping()
    public List<CockpitNews> get(@RequestParam int limit) {
        return newsService.get(limit);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CockpitNews> getById(@PathVariable String id) {
        CockpitNews news = newsService.getById(id);
        if (news == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(news);
    }
}

package at.htlle.infopoint.controller;

import at.htlle.infopoint.clients.cockpit.CockpitNews;
import at.htlle.infopoint.dto.NewsDto;
import at.htlle.infopoint.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/v1/news")
//@RequiredArgsConstructor
public class NewsController {

    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    private final NewsService newsService;

    @GetMapping("/{limit}")
    public List<CockpitNews> get(@PathVariable int limit) {
        return newsService.get(limit);
    }
}

package at.htlle.infopoint.controller;

import at.htlle.infopoint.dto.NewsDto;
import at.htlle.infopoint.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;

@RestController
@RequestMapping("/api/v1/news")
@RequiredArgsConstructor
public class NewsController {

    private final NewsService newsService;

    @GetMapping
    public Page<NewsDto> list(
            @RequestParam(required = false) Instant from,
            @RequestParam(required = false) Instant to,
            @PageableDefault(size = 20) Pageable pageable) {
        return newsService.list(from, to, pageable);
    }

    @GetMapping("/{id}")
    public NewsDto get(@PathVariable Long id) {
        return newsService.get(id);
    }
}

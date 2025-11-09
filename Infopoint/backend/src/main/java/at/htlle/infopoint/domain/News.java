package at.htlle.infopoint.domain;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "news",
        indexes = {
                @Index(name = "idx_news_visible_from_to", columnList = "visible_from, visible_to"),
                @Index(name = "idx_news_created_at", columnList = "created_at")
        })
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 160)
    private String title;

    @Column(length = 255)
    private String teaser;

    @Lob
    @Column(name = "content_html")
    private String contentHtml;

    @Column(name = "visible_from")
    private Instant visibleFrom;

    @Column(name = "visible_to")
    private Instant visibleTo;

    @Column(name = "image_url", length = 255)
    private String imageUrl;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt = Instant.now();

    // getters/setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getTeaser() { return teaser; }
    public void setTeaser(String teaser) { this.teaser = teaser; }
    public String getContentHtml() { return contentHtml; }
    public void setContentHtml(String contentHtml) { this.contentHtml = contentHtml; }
    public Instant getVisibleFrom() { return visibleFrom; }
    public void setVisibleFrom(Instant visibleFrom) { this.visibleFrom = visibleFrom; }
    public Instant getVisibleTo() { return visibleTo; }
    public void setVisibleTo(Instant visibleTo) { this.visibleTo = visibleTo; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
}

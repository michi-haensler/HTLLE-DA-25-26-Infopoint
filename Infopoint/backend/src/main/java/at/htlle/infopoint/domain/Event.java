package at.htlle.infopoint.domain;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "event",
        indexes = {
                @Index(name = "idx_event_start", columnList = "start_time"),
                @Index(name = "idx_event_end", columnList = "end_time"),
                @Index(name = "idx_event_type", columnList = "type")
        })
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 160)
    private String title;

    @Column(name = "start_time")
    private Instant startTime;

    @Column(name = "end_time")
    private Instant endTime;

    @Column(length = 120)
    private String location;

    @Column(length = 50)
    private String type;

    @Lob
    private String description;

    @Column(name = "image_url", length = 255)
    private String imageUrl;

    // getters/setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public Instant getStartTime() { return startTime; }
    public void setStartTime(Instant startTime) { this.startTime = startTime; }
    public Instant getEndTime() { return endTime; }
    public void setEndTime(Instant endTime) { this.endTime = endTime; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}

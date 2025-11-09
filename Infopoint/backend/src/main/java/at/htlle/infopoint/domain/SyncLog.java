package at.htlle.infopoint.domain;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "sync_log",
        indexes = {
                @Index(name = "idx_sync_log_source", columnList = "source"),
                @Index(name = "idx_sync_log_created_at", columnList = "created_at")
        })
public class SyncLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** z. B. "cockpit-news", "cockpit-events", "webuntis" */
    @Column(nullable = false, length = 60)
    private String source;

    /** "ok" | "error" */
    @Column(nullable = false, length = 20)
    private String status;

    /** Freitext/JSON (klein halten) */
    @Lob
    private String details;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt = Instant.now();

    // getters/setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getSource() { return source; }
    public void setSource(String source) { this.source = source; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getDetails() { return details; }
    public void setDetails(String details) { this.details = details; }
    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
}

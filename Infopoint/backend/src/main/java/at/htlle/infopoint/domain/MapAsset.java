package at.htlle.infopoint.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "map_asset",
        indexes = {
                @Index(name = "idx_map_asset_version", columnList = "version")
        })
public class MapAsset {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Freie Kennung (z. B. "v1", Hash, Timestamp) */
    @Column(length = 50)
    private String version;

    @Column(name = "mime_type", nullable = false, length = 50)
    private String mimeType; // z. B. image/png

    private Integer width;
    private Integer height;

    /** Bilddaten (BLOB) */
    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] content;

    // getters/setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getVersion() { return version; }
    public void setVersion(String version) { this.version = version; }
    public String getMimeType() { return mimeType; }
    public void setMimeType(String mimeType) { this.mimeType = mimeType; }
    public Integer getWidth() { return width; }
    public void setWidth(Integer width) { this.width = width; }
    public Integer getHeight() { return height; }
    public void setHeight(Integer height) { this.height = height; }
    public byte[] getContent() { return content; }
    public void setContent(byte[] content) { this.content = content; }
}

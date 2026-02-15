package at.htlle.infopoint.service;

import at.htlle.infopoint.clients.cockpit.CockpitClient;
import at.htlle.infopoint.clients.cockpit.CockpitMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@Service
public class MapService {

    private static final Logger log = LoggerFactory.getLogger(MapService.class);
    private final CockpitClient cockpitClient;

    public MapService(CockpitClient cockpitClient) {
        this.cockpitClient = cockpitClient;
    }

    public List<CockpitMap> getMaps() {
        return cockpitClient.getMaps();
    }

    public byte[] getMapImageByFloor(String floor) {
        log.info("getMapImageByFloor called with floor: {}", floor);
        // 1) Versuch: CMS nach floor
        try {
            CockpitMap map = cockpitClient.getMapByFloor(floor);
            log.info("getMapByFloor returned: {}", map);
            if (map != null && map.image() != null && map.image().path() != null) {
                log.info("Image path: {}", map.image().path());
                byte[] img = cockpitClient.getImageByPath(map.image().path());
                log.info("Image bytes received: {}", img != null ? img.length : "null");
                if (img != null && img.length > 0) return img;
            } else {
                log.warn("Map or image is null - map: {}, image: {}", map, map != null ? map.image() : "N/A");
            }
        } catch (Exception e) {
            log.error("Exception in getMapImageByFloor: ", e);
        }

        // 2) Fallback auf alten Endpoint (Kompatibilität)
        return loadImageBytesWithFallback();
    }

    // Falls du noch meta() brauchst -> kann bleiben wie es ist
    public byte[] meta() {
        return new byte[0];
    }

    public byte[] loadImageBytesWithFallback() {
        // 1) Versuch: CMS
        try {
            byte[] img = cockpitClient.getMapImageMeta();
            if (img != null && img.length > 0) return img;
        } catch (Exception ignored) {
            // CMS offline -> fallback
        }

        // 2) Fallback: lokales PNG
        try {
            return new ClassPathResource("static/map-placeholder.png").getContentAsByteArray();
        } catch (IOException ignored) {
            // Datei fehlt -> generiere Placeholder
        }

        // 3) Generiere ein einfaches Placeholder-Bild
        return generatePlaceholderImage();
    }

    private byte[] generatePlaceholderImage() {
        try {
            BufferedImage image = new BufferedImage(800, 600, BufferedImage.TYPE_INT_RGB);
            Graphics2D g2d = image.createGraphics();
            
            // Hintergrund
            g2d.setColor(new Color(240, 240, 240));
            g2d.fillRect(0, 0, 800, 600);
            
            // Text
            g2d.setColor(new Color(100, 100, 100));
            g2d.setFont(new Font("Arial", Font.BOLD, 24));
            String text = "Lageplan nicht verfügbar";
            FontMetrics fm = g2d.getFontMetrics();
            int x = (800 - fm.stringWidth(text)) / 2;
            int y = 300;
            g2d.drawString(text, x, y);
            
            g2d.dispose();
            
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(image, "png", baos);
            return baos.toByteArray();
        } catch (IOException e) {
            return new byte[0];
        }
    }
}
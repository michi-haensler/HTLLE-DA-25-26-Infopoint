package at.htlle.infopoint.repository;

import at.htlle.infopoint.domain.MapAsset;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MapAssetRepository extends JpaRepository<MapAsset, Long> {

    /** Neueste Version (nach ID) – nützlich, wenn ihr genau ein aktives Bild haltet. */
    Optional<MapAsset> findTopByOrderByIdDesc();

    /** Neueste Revision einer bestimmten Versionskennung. */
    Optional<MapAsset> findTopByVersionOrderByIdDesc(String version);
}

package at.htlle.infopoint.repository;

import at.htlle.infopoint.domain.SyncLog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SyncLogRepository extends JpaRepository<SyncLog, Long> {

    Page<SyncLog> findAllBySourceOrderByCreatedAtDesc(String source, Pageable pageable);
}

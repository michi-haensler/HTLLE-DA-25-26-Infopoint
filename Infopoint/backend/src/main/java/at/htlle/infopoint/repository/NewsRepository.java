package at.htlle.infopoint.repository;

import at.htlle.infopoint.domain.News;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.time.Instant;

public interface NewsRepository extends JpaRepository<News, Long> {

    /** Sichtbare News zum Zeitpunkt now (visibleFrom <= now && (visibleTo is null || visibleTo >= now)) */
    @Query("""
           select n from News n
           where n.visibleFrom <= :now and (n.visibleTo is null or n.visibleTo >= :now)
           order by n.visibleFrom desc, n.createdAt desc
           """)
    Page<News> findVisible(@Param("now") Instant now, Pageable pageable);

    /** Filterbar nach Zeitraum (from/to optional). Praktisch für Listen-Ansicht im UI. */
    @Query("""
           select n from News n
           where (:from is null or n.visibleFrom >= :from)
             and (:to   is null or (n.visibleTo is null or n.visibleTo <= :to))
           order by n.visibleFrom desc, n.createdAt desc
           """)
    Page<News> findByWindow(@Param("from") Instant from,
                            @Param("to") Instant to,
                            Pageable pageable);
}


package at.htlle.infopoint.repository;

import at.htlle.infopoint.domain.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.time.Instant;

public interface EventRepository extends JpaRepository<Event, Long> {

    /** Zeitfenster: es gibt Überschneidung, wenn end >= from und start <= to. Typ optional. */
    @Query("""
           select e from Event e
           where (:from is null or e.endTime   >= :from)
             and (:to   is null or e.startTime <= :to)
             and (:type is null or lower(e.type) = lower(:type))
           order by e.startTime asc, e.id asc
           """)
    Page<Event> findByOverlap(
            @Param("from") Instant from,
            @Param("to") Instant to,
            @Param("type") String type,
            Pageable pageable);
}

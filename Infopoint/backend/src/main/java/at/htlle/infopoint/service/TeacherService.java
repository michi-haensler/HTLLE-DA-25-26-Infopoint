package at.htlle.infopoint.service;

import at.htlle.infopoint.clients.webuntis.WebUntisClient;
import at.htlle.infopoint.dto.TeacherDayDTO;
import at.htlle.infopoint.dto.TeacherInfoDTO;
import at.htlle.infopoint.util.TeacherFinder;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {

    private final WebUntisClient webUntisClient;

    public TeacherService(WebUntisClient webUntisClient) {
        this.webUntisClient = webUntisClient;
    }

    public List<TeacherInfoDTO> searchTeachers(String query, String date) {

        JsonNode json = webUntisClient.getDayOverview(date);

        return TeacherFinder.search(json, query);
    }

    public Optional<TeacherDayDTO> getTeacherDay(String shortCode, String date) {
        JsonNode json = webUntisClient.getDayOverview(date);
        return TeacherFinder.findTeacherDay(json, shortCode);
    }
}

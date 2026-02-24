package at.htlle.infopoint.util;

import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class ConvertToUntisTimeUtil {
    private static final ZoneId SCHOOL_ZONE = ZoneId.of("Europe/Vienna");

    public static int nowAsUntisTime() {
        LocalTime now = ZonedDateTime.now(SCHOOL_ZONE).toLocalTime();
        return now.getHour() * 100 + now.getMinute();
    }

}

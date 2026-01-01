package at.htlle.infopoint.util;

import java.time.LocalTime;

public class ConvertToUntisTimeUtil {
    public static int nowAsUntisTime() {
        LocalTime now = LocalTime.now();
        return now.getHour() * 100 + now.getMinute();
    }

}

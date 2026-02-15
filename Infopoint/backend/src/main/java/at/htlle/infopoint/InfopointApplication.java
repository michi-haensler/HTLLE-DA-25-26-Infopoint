package at.htlle.infopoint;

import at.htlle.infopoint.config.CockpitConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(CockpitConfig.class)
public class InfopointApplication {

	public static void main(String[] args) {
		SpringApplication.run(InfopointApplication.class, args);
	}

}

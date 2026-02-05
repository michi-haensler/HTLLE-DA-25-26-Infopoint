# Build Stage
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app

# Maven Wrapper kopieren und ausführbar machen
COPY mvnw .
COPY .mvn .mvn
RUN chmod +x mvnw

# Dependencies zuerst (Caching)
COPY pom.xml .
RUN ./mvnw dependency:go-offline -B

# Source Code kopieren und bauen
COPY src src
RUN ./mvnw package -DskipTests

# Runtime Stage
FROM eclipse-temurin:21-jre
WORKDIR /app

# JAR aus Build Stage kopieren
COPY --from=build /app/target/*.jar app.jar

# Port für Spring Boot
EXPOSE 8888

ENTRYPOINT ["java", "-jar", "app.jar"]

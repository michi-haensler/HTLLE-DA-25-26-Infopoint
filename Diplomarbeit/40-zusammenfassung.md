# Zusammenfassung

<!-- 
Hier schreiben Sie gemeinsam eine Zusammenfassung der gesamten Arbeit, in der sie auf einigen (wenigen) Seiten nochmals die Aufgabenstellung und die durch Ihre Diplomarbeit gefundenen Resultate beschreiben, wobei in der auch auf den Entstehungsprozess, persönliche Erfahrungen, Probleme bei der Durchführung,Verbesserungsmöglichkeiten, mögliche Erweiterungen usw. eingegangen werden kann.
War das Thema richtig gewählt, was wurde konkret erreicht, welche Punkte bliebenoffen und wie könnte von hier aus weitergearbeitet werden?

Dabei gehen Sie nicht ins Detail (dafür sind die Detailkapitel da) sondern beschreiben wie Ihre Teilaufgaben zur Lösung des Gesamtproblems beigetragen haben.

Zum Schluss geben Sie noch einen Ausblick was die nächsten Schritte sein könnten und wo man bei Ihrer Arbeit anknüpfen könnte.
-->
## Entstehungsprozess

## Systembeschreibung der entwickelten Lösung

### Systemarchitektur

Das Infopoint-System folgt einer klassischen dreischichtigen Architektur, bestehend aus einem
Frontend, einem Backend und einem Content-Management-System (CMS). Alle drei Komponenten werden
als eigenständige Docker-Container betrieben und kommunizieren über ein gemeinsames internes
Docker-Bridge-Netzwerk (`infopoint-network`). Die vollständige Orchestrierung erfolgt mittels
Docker Compose, was eine reproduzierbare Deploymentumgebung auf jedem kompatiblen Host-System
gewährleistet.

Die Kommunikation zwischen den Schichten erfolgt über den REST-API vom Frontend an das Backend. 
Das Backend seinerseits kommuniziert mit dem Cockpit-CMS sowie mit der externen WebUntis-Schnittstelle.

### Technologiestack

| Schicht | Technologie | Version |
|---------|-------------|---------|
| Frontend | React | 19 |
| Frontend | TypeScript | 5.9 |
| Frontend | Vite | 7 |
| Frontend | React Router DOM | 6 |
| Backend | Java | 21 |
| Backend | Spring Boot | 3.3.5 |
| Backend | Lombok | 1.18.32 |
| CMS | Cockpit CMS (headless) | core-latest |
| Betrieb | Docker / Docker Compose | latest |

:Technologiestack

### Systemkomponenten

Das System besteht aus den folgenden Hauptkomponenten:

**Frontend (React SPA)**

Das Frontend stellt eine kiosktaugliche Benutzeroberfläche bereit. Beim ersten Aufruf wird ein
Screensaver angezeigt; erst nach einer Benutzerinteraktion (Klick oder Tastendruck) wird die
Hauptnavigation zugänglich. Die Hauptseite bietet eine Kachelnavigation mit folgenden Modulen:

- **Neuigkeiten** – aktuelle Schulnews aus dem CMS, mit Detailansicht je Beitrag
- **Lageplan** – Gebäudepläne als Bilddaten, stockwerksweise abrufbar
- **Termine** – kommende Schulveranstaltungen aus dem CMS
- **Lehrer finden** – Echtzeitabfrage des aktuellen Aufenthaltsorts einer Lehrkraft laut Stundenplan
- **Stundenplan** – Tagesübersicht für Klassen und Laborbelegungspläne
- **Instagram-Feed** – Social-Media-Inhalte der Schule

Das Routing erfolgt client-seitig über React Router DOM. Alle Seiten sind als lazy-geladene
Komponenten unter eigenem Pfad erreichbar (z. B. `/teachers`, `/stundenplan/klassen`,
`/laborstundenplan/:id`).

**Backend (Spring Boot REST-API)**

Das Backend exponiert eine versionierte REST-API unter dem Basispfad `/api/v1/` auf Port 8888.
Die API gliedert sich in folgende Ressourcen:

| Endpunkt | Methode | Beschreibung |
|----------|---------|--------------|
| `/api/v1/events/{limit}` | GET | Termine aus dem CMS |
| `/api/v1/news` | GET | Neuigkeiten aus dem CMS |
| `/api/v1/news/{id}` | GET | Einzelnen Beitrag laden |
| `/api/v1/teacher-finder/search?q=&date=` | GET | Lehrersuche via WebUntis |
| `/api/v1/class-finder/search?q=&date=` | GET | Klassensuche via WebUntis |
| `/api/v1/class-finder/all?date=` | GET | Alle Klassen eines Tages |
| `/api/v1/laborplaene` | GET | Alle Laborstundenpläne |
| `/api/v1/laborplaene/{id}` | GET | Einzelnen Laborplan laden |
| `/api/v1/laborplaene/image?path=` | GET | Bilddaten eines Laborplans |
| `/api/v1/map` | GET | Metadaten aller Gebäudekarten |
| `/api/v1/map/image` | GET | Standardgebäudekarte als PNG |
| `/api/v1/map/image/{floor}` | GET | Gebäudekarte eines bestimmten Stockwerks |
| `/api/v1/health` | GET | Systemstatus |

:Schnittstellen

Die interne Struktur des Backends folgt dem klassischen Schichtmodell: Controller nehmen
HTTP-Anfragen entgegen und delegieren an Service-Klassen, welche die Geschäftslogik
kapseln. Für die Kommunikation mit externen Systemen sind dedizierte Client-Klassen
(`CockpitClient`, `WebUntisClient`) vorgesehen. Hilfsklassen (`TeacherFinder`,
`ClassFinder`, `TeacherHeaderParser`) übernehmen das Parsen und Aufbereiten der von
WebUntis zurückgelieferten Daten. Data-Transfer-Objekte (DTOs) entkoppeln die interne
Datenstruktur von der API-Darstellung.

**Content-Management-System (Cockpit CMS)**

Cockpit CMS wird als headless CMS eingesetzt und ist ausschließlich für das Redaktionspersonal
der Schule zugänglich (Port 8080). Es verwaltet folgende Inhaltstypen: Neuigkeiten (`news`),
Termine (`events`), Gebäudepläne (`maps`) sowie Laborstundenpläne (`laborplaene`). Das Backend
greift über die Cockpit-REST-API mit einem API-Schlüssel auf diese Inhalte zu.

### Datenflüsse

Folgende Datenflüsse sind im System zentral:

1. **CMS-Inhalte**: Das Redaktionspersonal pflegt Inhalte (News, Termine, Karten, Labordaten) im
   Cockpit-CMS-Backend. Das Spring-Boot-Backend fragt diese per HTTP-GET von der Cockpit-API
   ab und reicht sie als aufbereitete DTOs an das Frontend weiter.

2. **Stundenplan-Echtzeitdaten**: Bei einer Lehrkraft- oder Klassensuche sendet das Backend eine
   HTTP-POST-Anfrage an die WebUntis-Monitor-API (`https://htlleoben.webuntis.com/WebUntis/monitor/dayoverview/data`).
   Die zurückgelieferten JSON-Daten werden serverseitig geparst, gefiltert und als strukturierte
   DTO-Liste an das Frontend geliefert.

3. **Bilddaten**: Gebäudekarten und Laborplan-Bilder werden vom Backend als Byte-Arrays aus dem
   Cockpit-CMS geladen und direkt als `image/png`- bzw. `image/jpeg`-Responses an das Frontend
   ausgeliefert, ohne dass das Frontend direkten Zugriff auf das CMS benötigt.

### Schnittstellen zu externen Systemen

Das System bindet zwei externe Dienste an:

- **WebUntis** (`htlleoben.webuntis.com`): Die öffentlich zugängliche Monitor-API von WebUntis
  liefert Tagesübersichten für Lehrkräfte und Klassen. Die Schnittstelle wird über HTTP-POST mit
  JSON-Body angesprochen; eine Authentifizierung ist für die Monitoransicht nicht erforderlich.

- **Instagram**: Die Anwendung verfügt über eine eigene Seite für einen Instagram-Feed
  (`/insta`). Die konkrete Einbindung (über einen Iframe) ist in der gleichnamigen Frontend-Komponente (`InstaFeedPage`) umgesetzt.

### Benutzeroberfläche

Die Benutzeroberfläche ist für den Kioskeinsatz auf einem Touchscreen-Display optimiert. Beim
Start zeigt das System einen Screensaver mit dem Schulnamen und einem Hinweis zur Aktivierung.
Nach der Aktivierung erscheint eine Kachel-Hauptnavigation, von der aus alle Module direkt
erreichbar sind. Die Gestaltung verwendet CSS-Module für komponentenlokales Styling sowie
Material Icons für eine konsistente Ikonografie. Eine responsive Layoutstruktur gewährleistet
die Bedienbarkeit sowohl per Touch als auch mit Maus und Tastatur.

### Sicherheitskonzept

Durch die Architektur als geschlossenes Docker-Netzwerk sind das Backend und das CMS nicht
direkt aus dem öffentlichen Netz erreichbar; lediglich das Frontend (Port 3000) ist für Endnutzer
gedacht. Das CMS (Port 8080) und das Backend (Port 8888) sind im Produktivbetrieb durch
Netzwerkkonfiguration oder einen vorgeschalteten Reverse Proxy zu schützen. Die Authentifizierung
gegenüber dem Cockpit-CMS erfolgt über einen API-Schlüssel, der als Umgebungsvariable
(`COCKPIT_API_KEY`) konfiguriert wird und nicht im Quellcode hinterlegt ist. Personenbezogene
Daten werden im System nicht gespeichert; Stundenplan-Abfragen erfolgen auf Basis öffentlich
zugänglicher Monitoransichten. 


## Erfahrungen und Herausforderungen

## Erweiterungsmöglichkeiten


<!-- 
## Lesen und lesen lassen

Wenn die Arbeit fertig ist, sollten Sie diese zunächst selbst nochmals vollständig undsorgfältig durchlesen, auch wenn man vielleicht das mühsam entstandene Produktlängst nicht mehr sehen möchte. Zusätzlich ist sehr zu empfehlen, auch einer weiterenPerson diese Arbeit anzutun – man wird erstaunt sein, wie viele Fehler man selbstüberlesen hat.
-->
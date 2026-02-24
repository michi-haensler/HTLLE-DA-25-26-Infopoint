# Teilaufgabe Schüler Moser Simon
\textauthor{Moser Simon}

## Aufgabenstellung und Verantwortungsbereich
Im Rahmen dieser Diplomarbeit war ich für den Entwurf, Umsetzung, Implementierung und Dokumentation
des Backends sowie des Content-Management-Systems (CMS) zuständig. Der Schwerpunkt meiner Arbeit
lag auf der serverseitigen Verarbeitung von Daten, der Bereitstellung von Schnittstellen für das
Frontend sowie der Verwaltung und Speicherung von Inhalten im CMS.
Das Backend ist das Herzstück des Infopoints. Seine Aufgaben sind es Daten zu verarbeiten und korrekt
an das Frontend zu liefern. Zusätzlich wurde ein CMS namens Cockpit angebunden um das Verwalten von 
Inhalten und Daten so benutzerfreundlich wie möglich zu gestalten ohne dabei immer in der Quellcode eingreifen zu müssen.

## Zielsetzung des Backend-Systems

Ziel des Backend-Systems ist es, die zentrale technische Grundlage für das Infopoint-System bereitzustellen. Das Backend übernimmt dabei die Verarbeitung von Anfragen, die Verwaltung der Inhalte sowie die Kommunikation zwischen dem CMS und dem Frontend. Es sorgt dafür, dass alle relevanten Daten strukturiert gespeichert, verarbeitet und zuverlässig an die Benutzeroberfläche ausgeliefert werden.

Ein weiteres Ziel ist die Trennung von Darstellung und Logik. Während das Frontend ausschließlich für die Anzeige der Informationen zuständig ist, konzentriert sich das Backend auf die Geschäftslogik und Datenverarbeitung. Dadurch wird das Gesamtsystem übersichtlicher, leichter wartbar und einfacher erweiterbar.

Zusätzlich wurde das Backend so umgesetzt, dass Inhalte flexibel über das CMS verwaltet werden können, ohne dass Änderungen am Quellcode notwendig sind. Das System ist darauf ausgelegt, stabil zu laufen, fehlerhafte Eingaben abzufangen und klare Rückmeldungen an das Frontend zu liefern. Insgesamt stellt das Backend sicher, dass das Infopoint-System zuverlässig, erweiterbar und für den späteren Einsatz im schulischen Umfeld geeignet ist.

### Anforderungen an digitale Informationssysteme

Digitale Informationssysteme müssen eine Reihe von Anforderungen erfüllen, um im praktischen Einsatz zuverlässig und benutzerfreundlich zu funktionieren. Eine der wichtigsten Anforderungen ist die **Zuverlässigkeit** des Systems. Die bereitgestellten Informationen müssen jederzeit korrekt und aktuell sein, da fehlerhafte oder veraltete Inhalte zu Verwirrung bei den Nutzern führen können. Besonders bei Infopoint-Systemen in öffentlichen oder schulischen Einrichtungen ist ein stabiler Dauerbetrieb essenziell.

Ein weiterer zentraler Punkt ist die **Benutzerfreundlichkeit**. Informationen sollen schnell und intuitiv auffindbar sein, ohne dass dafür technische Vorkenntnisse notwendig sind. Die Struktur der Inhalte sowie deren Darstellung müssen klar und verständlich gestaltet sein. Das Backend spielt hierbei eine entscheidende Rolle, da es die Daten strukturiert bereitstellt und konsistent an das Frontend übermittelt.

Darüber hinaus müssen digitale Informationssysteme **flexibel und wartbar** sein. Inhalte ändern sich regelmäßig, weshalb das System so aufgebaut sein sollte, dass Anpassungen ohne großen technischen Aufwand möglich sind. Durch den Einsatz eines Content-Management-Systems können Inhalte gepflegt werden, ohne direkt in den Programmcode eingreifen zu müssen. Dies erhöht die Effizienz und reduziert potenzielle Fehlerquellen.

Auch die **Sicherheit** stellt eine wichtige Anforderung dar. Das System muss vor unberechtigtem Zugriff geschützt sein und fehlerhafte oder ungültige Eingaben korrekt behandeln. Insbesondere das Backend ist dafür verantwortlich, Anfragen zu überprüfen und nur zulässige Daten zu verarbeiten.

Zusätzlich sollte ein digitales Informationssystem **erweiterbar und skalierbar** sein. Neue Funktionen oder Inhalte sollten ohne grundlegende Änderungen an der bestehenden Architektur integriert werden können. Eine klare Trennung zwischen Frontend, Backend und Datenhaltung trägt wesentlich dazu bei, diese Anforderungen zu erfüllen und ein langfristig nutzbares System bereitzustellen.

## Theorie

### Grundlagen von Backend-Systemen
Das Backend ist der serverseitige Teil von jeder Softwareanwendung. 
Es gibt viele verschiede Arten von Backends in Bezug auf das Aussehen aber im Kern
erfüllen sie alle den selben Zweck. Dieser ist und bleibt die Datenverarbeitung und
Beschaffung dieser. Es ist für die Benutzer nie direkt sichtbar sondern verbirgt
sich hinter dem Frontend.
Im Gegensatz zum Frontend, welches für die Benutzeroberfläche zuständig ist, 
konzentriert sich das Backend auf die Geschäftlogik der ganzen Application. 
Besonders bei Webanwendungen spielt das Backend eine zentrale Rolle, da es als Vermittler zwischen der Benutzeroberfläche und Datenhaltung fungiert.

### Abgrenzung zwischen Frontend und Backend
Bei der Entwicklung moderner Webanwendungen ist eine klare Abgrenzung zwischen Frontend und Backend von zentraler Bedeutung. Das Frontend stellt die Benutzeroberfläche dar und ist für die visuelle Darstellung sowie die Interaktion mit dem Benutzer zuständig. Es zeigt Inhalte an, nimmt Eingaben entgegen und leitet diese in Form von Anfragen an das Backend weiter. Für den Benutzer ist ausschließlich das Frontend sichtbar.

Das Backend hingegen arbeitet im Hintergrund und übernimmt die gesamte Datenverarbeitung sowie die Geschäftslogik des Systems. Es verarbeitet die vom Frontend gesendeten Anfragen, überprüft und validiert die Daten und stellt die angeforderten Informationen wieder bereit. Zudem ist das Backend für die Verwaltung der Inhalte und deren strukturierte Bereitstellung verantwortlich, beispielsweise über eine REST-API.

Durch diese klare Trennung wird das System übersichtlicher und besser wartbar. Änderungen an der Benutzeroberfläche können vorgenommen werden, ohne das Backend anpassen zu müssen, und umgekehrt. Darüber hinaus ermöglicht die Abgrenzung eine parallele Entwicklung von Frontend und Backend, was den Entwicklungsprozess effizienter gestaltet. Für das Infopoint-System stellt diese Trennung sicher, dass Inhalte zuverlässig verarbeitet und unabhängig von der Darstellung verwaltet werden können.


#### Die Aufgaben eines Backends lassen sich in folgende Bereiche gliedern:
- Datenverarbeitung: Eingehende Anfragen vom Frontend werden verarbeitet, validiert und entsprechend beantwortet.
- Datenverwaltung: Das Backend speichert und verwaltet Daten.
- Schnittstellenbereitstellung: Über Programmierschnittstellen (APIs) stellt das Backend Daten für das Frontend oder andere Systeme zur Verfügung.
- Sicherheit: Authentifizierung, Autorisierung und Schutz sensibler Daten sind zentrale Aufgaben des Backends.
- Geschäftslogik: Regeln und Abläufe der Anwendung werden im Backend umgesetzt, unabhängig von der Darstellung im Frontend.

### Client-Server-Architektur
Moderne Webanwendungen basieren in der Regel auf einer sogenannten Client-Server-Architektur. 
Dabei fungiert der Client (z. B. ein Infopoint-Terminal) als Anfragesteller, während der Server 
die Anfrage verarbeitet und eine entsprechende Antwort zurückliefert.
Der Client sendet dafür eine Anfrage mithilfe des HTTP-Protokolls an das Backend. Dieses verarbeitet die Anfrage,
greift gegebenenfalls auf das CMS zu und sendet die Ergebnisse in formatierter Form, meist als JSON-Daten, zurück.
Diese klare Trennung führt zu einer besseren Wartbarkeit und erleichtert die parallele Entwicklung von Frontend und Backend.

### Programmierschnittstellen (APIs)
Um die Kommunikation zwischen Frontend und Backend zu ermöglichen,
werden sogenannte APIs (Application Programming Interfaces) verwendet. 
Eine weit verbreitete Architekturform ist dabei REST (Representational State Transfer).

#### REST-APIs basieren auf standardisierten HTTP-Methoden:
- **GET** – Abrufen von Daten
- **POST** – Erstellen neuer Datensätze
- **PUT/PATCH** – Aktualisieren bestehender Daten
- **DELETE** – Löschen von Daten

Durch diese Struktur wird eine klare und einheitliche Kommunikation zwischen den einzelnen Systemkomponenten gewährleistet. 
Dies ist besonders bei größeren Projekten oder bei der späteren Erweiterung des Systems von Vorteil.

#### Ressourcen, Endpunkte und Datenformat
- Ressourcenorientierte, sprechende Pfade (z. B. `/api/v1/events`, `/api/v1/news`).
- Daten werden in der Regel als JSON übertragen; Request- und Response-Schemas sind eindeutig definiert (DTOs, Validierung).
- Versionierung über den Pfad (`/api/v1/...`) ermöglicht spätere, inkompatible Änderungen ohne das Frontend zu brechen.

Beispiel:

GET /api/v1/events -> 200 OK
```json
[
	{ "id": 1, "title": "Tag der offenen Tür", "date": "2026-03-15" },
	{ "id": 2, "title": "Infoabend", "date": "2026-04-10" }
]
```

#### Statuscodes und Fehlerbehandlung
- 200/201 für erfolgreiche Lese-/Schreiboperationen, 204 bei leerer Antwort.
- 400 bei ungültigen Eingaben (Validierungsfehler), 401/403 bei fehlender/ungültiger Authentifizierung bzw. Autorisierung, 404 wenn Ressource nicht existiert, 500 bei unerwarteten Fehlern.
- Einheitliches Fehlerformat (z. B. `{ "timestamp": ..., "status": 400, "error": "Bad Request", "message": "title must not be blank" }`) erleichtert Debugging und Frontend-Handling.

#### Sicherheit und Integrität
- CORS-Konfiguration schränkt erlaubte Ursprünge und Methoden ein.
- Eingaben werden serverseitig validiert (z. B. via Bean Validation) und geloggt; sensible Daten werden nie im Klartext zurückgegeben.
- Optional: Authentifizierung mittels Token (z. B. Bearer/JWT) für administrative Endpunkte.

#### Dokumentation und Tests
- Automatisierte API-Dokumentation (OpenAPI/Swagger) erleichtert Verständnis und Zusammenarbeit.
- Manuelle Tests z. B. mit Postman/REST Client, automatisierte Tests über Integrationstests im Backend.

#### API-Designrichtlinien und Versionierung

Die entwickelte REST-API folgt klaren und einheitlichen Designrichtlinien, um eine einfache Nutzung und gute Wartbarkeit zu gewährleisten. Die Endpunkte sind ressourcenorientiert aufgebaut und verwenden Pfade, wie zum Beispiel `/api/v1/events`. Dadurch ist sofort ersichtlich, welche Art von Daten über einen Endpunkt angesprochen wird. Die API liefert ihre Antworten im JSON-Format, wobei die Feldnamen einheitlich in camelCase gehalten sind.

Für die Verarbeitung von Anfragen werden die HTTP-Methoden entsprechend ihrer Bedeutung eingesetzt. GET dient zum Abrufen von Daten, POST zum Erstellen neuer Einträge, PUT oder PATCH zum Aktualisieren bestehender Daten und DELETE zum Entfernen von Einträgen. Dabei wird darauf geachtet, dass bestimmte Operationen idempotent sind, das heißt, dass mehrmaliges Ausführen derselben Anfrage zum gleichen Ergebnis führt. Zusätzlich werden HTTP-Statuscodes konsistent verwendet, um dem Frontend klare Rückmeldungen über den Erfolg oder Fehler einer Anfrage zu geben.

Für größere Datenmengen unterstützt die API standardisierte Query-Parameter zur Paginierung, Sortierung und Filterung. Über Parameter wie page und size können Datensätze seitenweise abgerufen werden, während sort eine definierte Reihenfolge ermöglicht. Fehlerfälle werden in einem einheitlichen, maschinenlesbaren Format zurückgegeben, sodass sie vom Frontend eindeutig erkannt und verarbeitet werden können.

Die Versionierung der API erfolgt über den URL-Pfad. Rückwärtskompatible Änderungen, wie kleinere Erweiterungen oder Verbesserungen, werden innerhalb derselben Version umgesetzt. Größere Änderungen, die bestehende Funktionen beeinflussen könnten, werden ausschließlich über eine neue Hauptversion, beispielsweise `/api/v2`, eingeführt. Veraltete Endpunkte werden gekennzeichnet und über eine Deprecation-Policy angekündigt, um eine geordnete Umstellung zu ermöglichen.

Zeit- und Datumsangaben werden einheitlich in UTC gespeichert und übertragen. Optional werden Mechanismen wie **Last-Modified** verwendet, um unnötige Datenübertragungen zu vermeiden. Insgesamt stellt das API-Design sicher, dass die Schnittstellen klar strukturiert sind und keine internen Implementierungsdetails nach außen preisgegeben werden.

### Backend Technologien:
#### Überblick:
Für die Umsetzung des Backends wurde das Java-Framework **Spring Boot** eingesetzt. 
Spring Boot eignet sich besonders für die Entwicklung moderner Web- und REST-basierter Anwendungen,
da es eine klare Projektstruktur, integrierte Serverfunktionalität sowie eine einfache Erweiterbarkeit durch zusätzliche Module bietet.
Die Verwaltung der Abhängigkeiten erfolgte mithilfe von Apache Maven. Maven ermöglicht es,
externe Bibliotheken zentral über die **pom.xml** zu definieren und automatisch in das Projekt einzubinden.
Dadurch wird sichergestellt, dass alle verwendeten Technologien in einer einheitlichen und reproduzierbaren Version vorliegen. 

#### Spring Boot als Backend-Framework:
Spring Boot bildet die Grundlage des Backends und übernimmt zentrale Aufgaben wie:
- Bereitstellung eines HTTP-Servers
- Verarbeitung von REST-Anfragen
- Routing von Endpunkten
- Integration zusätzlicher Module (z. B. Validierung, Tests)

Durch den Einsatz von Spring Boot konnte auf umfangreiche manuelle Konfiguration verzichtet werden, da viele Standardeinstellungen bereits vorkonfiguriert sind. Dies beschleunigte die Entwicklung und erhöhte die Wartbarkeit des Codes.

#### Eingesetzte Maven-Dependencies:
Für die Umsetzung der Backend-Funktionalität wurden mehrere Spring-Boot-Starter sowie zusätzliche Bibliotheken eingebunden.
Diese übernehmen jeweils klar definierte Aufgaben innerhalb des Systems.

#### Spring Boot Starter Web:
Der Spring Boot Starter Web stellt alle notwendigen Komponenten zur Verfügung, um eine klassische REST-basierte Webanwendung zu entwickeln.
Dazu zählen unter anderem:
- Unterstützung für HTTP-Requests (GET, POST, PUT, DELETE)
- Controller-Struktur zur Verarbeitung von Anfragen
- JSON-Serialisierung und -Deserialisierung

Diese Dependency bildet die Basis für die Kommunikation zwischen Frontend und Backend.

#### Spring Boot Starter Validation:
Der Spring Boot Starter Validation wird zur Validierung von Eingabedaten verwendet.
Damit können eingehende Anfragen überprüft werden, bevor sie weiterverarbeitet werden.
Beispiele für Validierungen sind:
- Pflichtfelder
- Längenbeschränkungen von Textfeldern
- Formatüberprüfungen (z. B. Strings, Zahlenwerte)

Diese Validierungen erhöhen die Datenqualität und tragen zur Sicherheit und Stabilität des Backends bei.

#### Spring Boot Starter Test:
Für Testzwecke wurde der Spring Boot Starter Test eingebunden.
Diese Dependency stellt Werkzeuge für das Testen von Komponenten, Services und Schnittstellen zur Verfügung.
Durch Tests kann sichergestellt werden, dass einzelne Funktionen korrekt arbeiten und Änderungen am Code keine unerwünschten Nebeneffekte verursachen.

#### Lombok:
Zur Reduktion von Boilerplate-Code (Code der oft vor kommt) wurde die Bibliothek Lombok eingesetzt.
Lombok ermöglicht es, häufig benötigte Methoden wie Getter, Setter oder Konstruktoren automatisch zu generieren.
Dadurch bleibt der Quellcode übersichtlich und besser lesbar, während gleichzeitig der Entwicklungsaufwand reduziert wird. 
Lombok wird ausschließlich zur Compile-Zeit (Wenn das Programm ausgeführt wird) verwendet und ist nicht Bestandteil der laufenden Anwendung.

### Content-Management-System (CMS) // TODO: Erweitern
#### Definition und Zweck eines CMS: 
Ein Content-Management-System (CMS) ist eine Softwarelösung, die es ermöglicht, Inhalte einer Anwendung einfach und benutzerfreundlich zu verwalten.
Inhalte können dabei Texte, Bilder, Veranstaltungen oder andere informationsrelevante Daten sein.
Der große Vorteil eines CMS besteht darin, dass Änderungen an Inhalten ohne direkte Anpassung des Quellcodes vorgenommen werden können.

#### Aufgaben eines CMS im Backend:
Das CMS ist eng mit dem Backend verknüpft und übernimmt unter anderem folgende Aufgaben:
- Erstellen, Bearbeiten und Löschen von Inhalten
- Strukturierte Speicherung der Inhalte
- Verwaltung von Benutzern und Rollen
- Bereitstellung der Inhalte über das Backend an das Frontend

Durch diese Funktionalitäten wird eine klare Trennung zwischen Inhalt und Darstellung erreicht. Das Frontend stellt lediglich die Inhalte dar, während das CMS für deren Verwaltung verantwortlich ist.


## Praktische Arbeit

### Überblick über die praktische Umsetzung
Der praktische Teil umfasst die **Konzeption, Implementierung und Dokumentation** des Backends sowie die **Konfiguration und Anbindung** des Content-Management-Systems (Cockpit CMS).  
Ziel war eine serverseitige Lösung, die **stabil**, **wartbar**, **erweiterbar** und im Alltag **einfach zu bedienen** ist. Inhalte sollen im CMS gepflegt werden können und anschließend über eine REST API standardisiert im Infopoint-Frontend angezeigt werden.

Zu Beginn wurden die Anforderungen gemeinsam mit dem Frontend abgestimmt. Dabei wurde festgelegt:
- **welche Inhalte** gebraucht werden (z. B. Events, News, Kategorien),
- **welche Felder** diese Inhalte haben (z. B. Titel, Datum, Beschreibung),
- und über **welche API-Endpunkte** das Frontend diese Daten abrufen kann.

### Systemgrenzen und Verantwortlichkeiten
Damit die Lösung übersichtlich bleibt, wurden klare Zuständigkeiten definiert:

- **Cockpit CMS:** Inhalte anlegen und pflegen (z. B. Events erstellen, News bearbeiten, Bilder hochladen)
- **Backend:** Inhalte aus dem CMS abholen, prüfen/aufbereiten und als REST API bereitstellen
- **Frontend/Infopoint:** Inhalte anzeigen und Benutzerinteraktion umsetzen

Beispiel:
- Eine Lehrperson erstellt im Cockpit CMS ein neues Event.
- Das Backend liefert dieses Event über `/api/v1/events`.
- Das Frontend zeigt es als „Nächstes Event“ am Infopoint an.

### Vorgehen und erstellte Artefakte
Die Umsetzung erfolgte in klaren Schritten. Dabei sind folgende Artefakte entstanden:

- **Ressourcen-Definition:** Welche Datenobjekte gibt es?  
  Beispiele: `events`, `news`, `categories`

- **API-Entwurf:** Welche Endpunkte gibt es und wie sind sie aufgebaut?  
  Beispiel:
  - `GET /api/v1/events` -> Liste aller Events
  - `GET /api/v1/events/{id}` -> Details zu einem Event

- **DTO-Konzept:** Trennung zwischen internen Objekten und dem, was die API ausgibt  
  Beispiel:
  - Intern kann ein Objekt mehr Felder haben (z. B. interne IDs oder Metadaten)
  - Nach außen liefert die API nur das, was das Frontend braucht (z. B. Titel, Datum, Text)

- **Validierung & Fehlerformat:** Einheitliche Regeln und klare Fehlermeldungen  
  Beispiel:
  - Wenn `title` fehlt -> Rückgabe `400 Bad Request` mit verständlicher Fehlermeldung

- **API-Dokumentation:** Dokumentation für das Frontend-Team (OpenAPI/Swagger)

### Entwicklungsumgebung und Tooling
Für eine reproduzierbare Entwicklungsumgebung wurden folgende Werkzeuge genutzt:

- **Spring Boot + Maven:** Backend-Implementierung und Dependency-Management
- **Docker Compose:** gemeinsamer Start von Backend, Frontend und Cockpit CMS
- **Logging:** einheitliche Log-Ausgaben zur Fehleranalyse und Nachvollziehbarkeit

Beispiel:
- Mit einem einzigen Start-Befehl werden alle Services hochgefahren,
  damit jeder im Team mit derselben Umgebung arbeiten kann.

### Planung und Systemarchitektur
Das Backend wurde so aufgebaut, dass die einzelnen Teile klar getrennt sind:

- **Controller-Schicht (API):** nimmt HTTP-Anfragen entgegen und gibt Antworten zurück  
- **Service-Schicht (Logik):** verarbeitet Daten und enthält die Geschäftslogik  
- **DTO-Schicht (Datenübertragung):** definiert, welche Daten die API liefert  
- **CMS-Anbindung:** holt Inhalte aus dem Cockpit CMS und macht sie nutzbar

Diese Trennung macht das System wartbar und erleichtert Erweiterungen,
weil Änderungen meist nur in einer Schicht notwendig sind.

### Implementierung des Backends

Die Implementierung des Backends erfolgte nach dem Prinzip der klaren Schichtentrennung. Ziel war es, eine übersichtliche und wartbare Struktur zu schaffen, bei der jede Schicht eine klar definierte Aufgabe übernimmt. Der Ablauf einer typischen Anfrage folgt dabei immer demselben Muster:

1. Eine HTTP-Anfrage erreicht den Controller.
2. Der Controller delegiert die Verarbeitung an die Service-Schicht.
3. Der Service verarbeitet die Daten und kommuniziert mit dem CMS.
4. Das Ergebnis wird als DTO zurückgegeben.
5. Der Controller liefert eine standardisierte HTTP-Antwort an das Frontend.

---

### Ablauf einer Anfrage (Beispiel: Events abrufen)

Um die Funktionsweise zu verdeutlichen, wird folgend ein typischer Ablauf beschrieben:

Ein Client sendet eine Anfrage an:

- GET `/api/v1/events`

Der Controller nimmt diese Anfrage entgegen und ruft den entsprechenden Service auf.

```java
@RestController
@RequestMapping("/api/v1/events")
public class EventsController {

    private final EventService eventService; // <-- Service für Events

    public EventsController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/{limit}")
    public List<CockpitEvent> get(@PathVariable int limit) {
        return eventService.get(limit);
    }
}

```

---

### Service-Schicht (Geschäftslogik)

Die Service-Schicht übernimmt die eigentliche Verarbeitung der Daten.  
Hier wird definiert:

- Wie Daten aus dem CMS geladen werden
- Wie sie ggf. gefiltert oder sortiert werden
- Wie sie in DTOs umgewandelt werden

Ein zentraler Bestandteil der Service-Schicht ist die Kommunikation mit dem Cockpit CMS.  
Dafür wird eine eigene Client-Klasse (`CockpitClient`) verwendet. Diese Klasse kapselt die externe Kommunikation und sorgt dafür, dass HTTP-Aufrufe zum CMS nicht direkt im Service implementiert werden. Dadurch bleibt der Service übersichtlich und unabhängig von technischen Details der CMS-Anbindung.

```java
@Service
public class EventService {

	private final CockpitClient cockpitClient; // <-- Verbindung zu Cockpit

    public EventService(CockpitClient cockpitClient) {
        this.cockpitClient = cockpitClient;
    }

    public List<CockpitEvent> get(int limit) {
        return cockpitClient.getAppointments(limit); // <-- holt Events
    }
}
```

In diesem Beispiel ruft die Methode `get(int limit)` die Methode `getAppointments(limit)` des `CockpitClient` auf.
Der Service selbst enthält keine HTTP-Logik, sondern delegiert diese Aufgabe vollständig an den Client.
Dadurch bleibt die Geschäftslogik klar getrennt von der technischen Kommunikation.

---

### Verwendung von DTOs

DTOs (Data Transfer Objects) dienen dazu, nur die Daten nach außen zu geben, die das Frontend wirklich benötigt.  
Interne Felder oder CMS-spezifische Informationen werden nicht direkt weitergegeben.

Beispiel:
Ein Event im CMS könnte folgende Felder enthalten:
- id
- title
- description
- internalMetadata
- createdAt
- updatedAt

Die API gibt jedoch nur zurück:
- title
- description
- date

```java
public record EventDto(
        Long id,
        String title,
        Instant start,
        Instant end,
        String location,
        String type,
        String description,
        String imageUrl
) {}
```

---

### API-Versionierung und Struktur
Die API ist versioniert aufgebaut.  
Alle Endpunkte befinden sich unter:

- `/api/v1/...`

Diese Struktur ermöglicht es, später eine neue Version (`/api/v2`) einzuführen, ohne bestehende Clients zu beeinflussen.

```java
@RequestMapping("/api/v1/events")
```
---

### Zusammenfassung der Backend-Implementierung

Durch die klare Trennung von Controller, Service und DTOs wurde eine saubere und wartbare Struktur geschaffen.  
Jede Anfrage folgt einem definierten Ablauf, wodurch das System nachvollziehbar und erweiterbar bleibt.  
Die Validierung und globale Fehlerbehandlung sorgen zusätzlich für Stabilität und klare Rückmeldungen an das Frontend.
#### Integration des Cockpit CMS
- Anbindung an das CMS zur Verwaltung von Inhalten (Texte, Bilder, Veranstaltungen, Kategorien).
- Saubere Trennung: CMS verwaltet Inhalte, Backend bereitet sie auf und stellt sie über standardisierte Endpunkte bereit.
- Umgang mit Medien/Uploads sowie grundlegende Rollen-/Rechtekonzepte im CMS für administrative Tätigkeiten.

#### Qualitätssicherung und Tests
- Komponententests und Integrationstests im Backend (Spring Boot Test) für zentrale Use-Cases.
- Manuelle API-Checks über Tools wie Postman/REST Client zur schnellen Verifikation während der Entwicklung.
- Automatisch generierte API-Dokumentation als gemeinsame Referenz für alle Beteiligten.

#### Bereitstellung und Betrieb
- Containerbasierter Build des Backends und orchestrierter Start der Services.
- Persistente Volumes für CMS-Daten und konfigurierbare Umgebungsvariablen (z. B. Basis-URL).
- Logging und einfache Metriken zur Überwachung des laufenden Systems; klare Deployment-Schritte für Test und Produktion.



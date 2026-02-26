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

### Projektsetup und Entwicklungsumgebung
Zu Beginn der praktischen Umsetzung des Backends wurde eine strukturierte und stabile Basis geschaffen.
Das Backend wurde als eigenständiges Spring-Boot-Projekt umgesetzt und klar vom Frontend getrennt.
Diese Trennung ermöglicht eine unabhängige Weiterentwicklung beider Systeme und sorgt für eine saubere Aufgabenteilung innerhalb des Projekts.

Als Entwicklungsumgebung wurde **IntelliJ IDEA** verwendet.
IntelliJ bietet eine umfassende Unterstützung für Spring Boot und Maven und erleichtert dadurch die Entwicklung erheblich.
Funktionen wie automatische Code-Vervollständigung, integrierte Fehleranalyse, Refactoring-Werkzeuge sowie eine direkte Integration von Build- und Run-Konfigurationen ermöglichen eine effiziente und strukturierte Arbeitsweise.

Das Projekt wurde mit **Maven** verwaltet, wodurch alle Abhängigkeiten zentral in der `pom.xml` definiert sind.
IntelliJ übernimmt dabei automatisch das Laden und Verwalten der benötigten Libraries (**dependencies**) [@Maven-Docs].
Änderungen an Dependencies werden direkt erkannt und in das Projekt integriert.
Dies sorgt für eine konsistente und reproduzierbare Entwicklungsumgebung.

Ein weiterer wichtiger Bestandteil der Entwicklungsumgebung war die Nutzung eines Versionsverwaltungssystems (Git) [@Git-Docs].
Dadurch konnten Änderungen am Backend nachvollziehbar dokumentiert, Zwischenstände gesichert und bei Bedarf frühere Versionen wiederhergestellt werden.
Dies unterstützte sowohl die eigene Arbeitsweise als auch die Zusammenarbeit im Team.

Insgesamt bildete die gewählte Entwicklungsumgebung die Grundlage für eine effiziente und strukturierte Backend-Entwicklung.
Durch die Kombination aus **IntelliJ** und **Maven** konnte eine stabile, gut wartbare und reproduzierbare Projektstruktur geschaffen werden.

### Projekt- und Ordnerstruktur des Backends
Bei der Umsetzung des Backends wurde von Beginn an auf eine klare und nachvollziehbare Projektstruktur geachtet.
Eine saubere Ordnerstruktur ist besonders bei größeren Anwendungen wichtig, da sie die Wartbarkeit verbessert und neuen Entwicklern eine schnelle Orientierung im Projekt ermöglicht.

Das Backend basiert auf einem typischen Spring-Boot-Projektaufbau.
Der Quellcode befindet sich im Verzeichnis `src/main/java`, während Konfigurationsdateien wie die `application.yml` bzw. `application.properties` im Ordner `src/main/resources` abgelegt sind.

Innerhalb des Hauptpakets wurde der Code zusätzlich logisch gegliedert.
Die wichtigsten Unterpakete sind:

- `controller` – Enthält die REST-Controller, welche die HTTP-Anfragen entgegennehmen.
- `service` – Beinhaltet die Geschäftslogik der Anwendung.
- `clients` – Enthält externe Schnittstellen, z. B. den CockpitClient und WebUntisClient.
- `dto` – Definiert Data Transfer Objects zur strukturierten Datenübertragung.
- `config` – Beinhaltet Konfigurationsklassen (z. B. für WebClient oder CMS-Zugriff).
- `util` - Stellt Hilfsklassen zur leichteren Verarbeitung von Daten (z.B. TimeConverter)

Diese klare Trennung sorgt dafür, dass jede Klasse eine eindeutige Aufgabe hat und Verantwortlichkeiten nicht vermischt werden.
Änderungen an einer Schicht, beispielsweise an der API oder an der CMS-Anbindung, können dadurch durchgeführt werden, ohne andere Teile des Systems unnötig zu beeinflussen.

Die durchdachte Projektstruktur bildet somit eine wichtige Grundlage für eine stabile, erweiterbare und langfristig wartbare Backend-Architektur.

![Projektstruktur\label{fig:Projektstruktur}](img/Backend_Projektstruktur.PNG){width=100%}

### Vorgehen und erstellte Artefakte
Im Rahmen der Umsetzung sind mehrere sogenannte **Artefakte** entstanden.  
Als Artefakte bezeichnet man alle greifbaren Ergebnisse, die während eines Entwicklungsprozesses erstellt werden.
Dabei handelt es sich nicht nur um fertigen Programmcode, sondern auch um Konzepte, Entwürfe, Definitionen oder Dokumentationen, die für die Umsetzung notwendig sind.  

Artefakte helfen dabei, das System strukturiert zu planen, nachvollziehbar umzusetzen und später leichter zu warten oder zu erweitern.
Sie dienen außerdem als gemeinsame Grundlage für die Abstimmung im Team, insbesondere zwischen Backend- und Frontend-Entwicklung.

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

### Umsetzung der Controller-Schicht im Backend

Die Controller-Schicht bildet die Schnittstelle zwischen dem Backend und dem Frontend.
Sie ist dafür verantwortlich, eingehende HTTP-Anfragen entgegenzunehmen, diese an die entsprechende Service-Schicht weiterzuleiten und die Antwort in strukturierter Form zurückzugeben.
In Spring Boot werden Controller typischerweise mit der Annotation `@RestController` definiert.
Diese ermöglicht es, REST-Endpunkte einfach zu erstellen und JSON-Antworten automatisch zu serialisieren (vgl. [@Spring-Boot-Docs]).

Jeder Controller ist einer bestimmten Ressource zugeordnet, beispielsweise `events` oder `news`.
Über `@RequestMapping` wird ein gemeinsamer Basispfad definiert, etwa `/api/v1/events`.
Konkrete Endpunkte werden anschließend mit Annotationen wie `@GetMapping`, `@PostMapping`, `@PutMapping` oder `@DeleteMapping` umgesetzt (vgl. [@Spring-Boot-Docs]).
Dadurch wird klar festgelegt, welche HTTP-Methode welche Funktion ausführt.

Die Controller enthalten bewusst keine Geschäftslogik.
Ihre Aufgabe besteht ausschließlich darin, Anfragen zu validieren, Parameter entgegenzunehmen und diese an die Service-Schicht weiterzugeben.
Diese klare Trennung zwischen Controller und Service erhöht die Wartbarkeit des Systems und sorgt für eine übersichtliche Struktur.

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

### Umsetzung der Service-Schicht im Backend
Die Service-Schicht bildet das zentrale Element der Geschäftslogik im Backend.
Während die Controller-Schicht ausschließlich für die Entgegennahme und Rückgabe von HTTP-Anfragen zuständig ist, übernimmt die Service-Schicht die eigentliche Verarbeitung der Daten.
Sie koordiniert die Kommunikation mit externen Clients (z. B. CockpitClient oder WebUntisClient), wendet Geschäftsregeln an und bereitet die Daten für die Weitergabe an die Controller-Schicht auf.

Ein wesentliches Konzept innerhalb der Service-Schicht ist die Verwendung von Data Transfer Objects (DTOs).
DTOs dienen dazu, Daten strukturiert und kontrolliert zwischen den einzelnen Schichten zu übertragen, ohne interne Implementierungsdetails preiszugeben (vgl. [@DTOs-information]).
Dadurch wird sichergestellt, dass das Backend klar zwischen interner Datenstruktur und externer API-Darstellung unterscheidet.

Die Service-Schicht greift nicht direkt auf HTTP-Mechanismen zu, sondern arbeitet rein logisch.
Dadurch bleibt sie unabhängig von der konkreten API-Implementierung und kann leichter getestet oder erweitert werden.
Zudem ermöglicht diese Struktur eine saubere Trennung der Verantwortlichkeiten (Separation of Concerns), was die Wartbarkeit und Übersichtlichkeit des Systems deutlich verbessert.

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

### Umsetzung und Einsatz von DTOs (Data Transfer Objects)
Im Backend werden **DTOs (Data Transfer Objects)** eingesetzt, um Daten kontrolliert zwischen den einzelnen Schichten (Controller, Service) und nach außen zur REST API zu übertragen. 
Ein DTO ist dabei ein eigenes, meist einfaches Objekt, das nur jene Felder enthält, die das Frontend wirklich benötigt.
Dadurch wird verhindert, dass interne Strukturen oder unnötige Informationen direkt über die API sichtbar werden.
Außerdem macht diese Trennung den Code übersichtlicher und reduziert das Risiko, dass sich Änderungen an internen Klassen direkt auf die API auswirken (vgl. [@DTOs-information]).

In der praktischen Umsetzung werden DTOs vor allem in zwei Situationen verwendet: Erstens bei **Antworten** an das Frontend (Response-DTO), damit das Frontend eine klare und stabile Struktur erhält. 
Zweitens bei **Anfragen** an das Backend (Request-DTO), um Eingabedaten sauber entgegenzunehmen und direkt validieren zu können.
Die Umwandlung von internen Objekten (z. B. Cockpit-Datenmodelle) in DTOs passiert typischerweise in der Service-Schicht, da dort die Geschäftslogik liegt.
So bleibt der Controller möglichst schlank und konzentriert sich auf die HTTP-Ebene.


### Verwendung von DTOs
DTOs (Data Transfer Objects) dienen dazu, nur die Daten nach außen zu geben, die das Frontend wirklich benötigt.  
Interne Felder oder CMS-spezifische Informationen werden nicht direkt weitergegeben. [@DTOs-information]

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

### CockpitClient (CMS-Anbindung)
Der **CockpitClient** ist die zentrale Verbindung zwischen Backend und dem **Cockpit CMS**.
Seine Aufgabe ist es, Inhalte wie News, Events, Karten oder Laborpläne aus dem CMS abzurufen und dem Backend als Java-Objekte bereitzustellen. Damit bleibt die Kommunikation mit dem CMS an einer Stelle gebündelt: Controller und Services müssen keine URLs, Header oder Speziallogik für Cockpit kennen, sondern rufen nur Methoden wie `getNews(...)` oder `getAppointments(...)` auf.
Die Zugriffsdaten (CMS-URL und API-Key) werden über eine eigene Konfiguration (`CockpitConfig`) eingebunden.
Zusätzlich wurde die maximale In-Memory-Größe des WebClients erhöht, damit auch größere Medien (z. B. Bilder) verarbeitet werden können.
Bei Fehlern (z. B. falscher API-Key, CMS nicht erreichbar) fängt der Client Ausnahmen ab und gibt sichere Rückgabewerte zurück (z. B. `List.of()` oder `null`), damit das Backend stabil bleibt und das Frontend nicht durch Exceptions „abstürzt“.

**CockpitClient – Beispiel für den Abruf von News über REST** [@SLF4J-Docs]
```java
@Component
public class CockpitClient {

    private final WebClient webClient;
    private final CockpitConfig cockpitConfig;
    private static final Logger log = LoggerFactory.getLogger(CockpitClient.class);

    public CockpitClient(WebClient.Builder builder, CockpitConfig cockpitConfig) {
        this.webClient = builder
                .codecs(c -> c.defaultCodecs().maxInMemorySize(16 * 1024 * 1024))
                .build();
        this.cockpitConfig = cockpitConfig;
    }

    public List<CockpitNews> getNews(int limit) {
        try {
            return webClient.get()
                    .uri(cockpitConfig.getUrl() + "/api/content/items/news?limit=" + limit)
                    .header("api-key", cockpitConfig.getApiKey())
                    .retrieve()
                    .bodyToMono(new ParameterizedTypeReference<List<CockpitNews>>() {})
                    .block();
        } catch (WebClientResponseException e) {
            return List.of();
        }
    }
}
```

### WebUntisClient (Stundenplan Anbindung)
Der **WebUntisClient** dient dazu, externe Informationen aus **WebUntis** abzurufen und im Infopoint anzuzeigen (z. B. Tagesübersicht für Lehrer oder Klassen).
Der Client nutzt ebenfalls den **WebClient**, um HTTP-Anfragen an WebUntis zu senden.
Im Gegensatz zum **CockpitClient** arbeitet WebUntis hier mit einem GET-Request auf einen Monitor-Endpunkt, bei dem ein Request-Body mit Parametern wie `date` und `format` mitgeschickt wird.
Da Eingaben vom Frontend fehlerhaft sein können (z. B. ein ungültiges Datum), normalisiert der Client zuerst den Datumswert und verwendet bei Fehlern automatisch das aktuelle Datum als Fallback.
Zusätzlich gibt es eine Schutzlogik (`safeFetchDayOverview`): Falls WebUntis nicht erreichbar ist oder ein Fehler auftritt, wird nicht einfach eine Exception weitergeworfen, sondern ein leeres, aber gültiges JSON-Objekt zurückgegeben.
Das sorgt dafür, dass die Anzeige am Infopoint weiterhin funktioniert, auch wenn die externe Quelle kurzzeitig Probleme hat.

**WebUntisClient - Abruf der Tagesübersicht für Klassen mit Fallback** [@SLF4J-Docs]
```java
@Component
public class WebUntisClient {

    private final WebClient webClient;
    private static final Logger log = LoggerFactory.getLogger(CockpitClient.class);

    public WebUntisClient(WebClient.Builder webClient) {
        this.webClient = webClient
                .baseUrl("https://htlleoben.webuntis.com/WebUntis")
                .build();
    }

    public JsonNode getClassOverview(String date) {
        String normalizedDate = normalizeDate(date);
        try {
            return safeFetchDayOverview(normalizedDate, "Tagesübersicht Klass");
        } catch (Exception ignored) {
            return safeFetchDayOverview(normalizedDate, "Tagesübersicht Klassen");
        }
    }

    private JsonNode fetchDayOverviewByFormat(String date, String format) {
        Map<String, String> requestBody = Map.of("date", date, "format", format);
        return webClient.post()
                .uri(uriBuilder -> uriBuilder
                        .path("/monitor/dayoverview/data")
                        .queryParam("school", "htlleoben")
                        .build())
                .header("X-Requested-With", "XMLHttpRequest")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(JsonNode.class)
                .block();
    }
}
```

### Utility-Klassen im Backend

Neben Controllern, Services und DTOs wurden im Backend mehrere **Utility-Klassen** (kurz: *Utils*) umgesetzt.
Diese Klassen enthalten wiederverwendbare Hilfslogik, die an mehreren Stellen benötigt wird, aber **nicht direkt** in Controller oder Services gehört. 
Typische Aufgaben sind z. B. das **Auslesen und Aufbereiten von WebUntis-JSON**, das **Suchen/Filtern** von Daten oder kleine **Zeit-Konvertierungen**.
Dadurch bleibt der restliche Code übersichtlich und doppelte Logik wird vermieden.
Da WebUntis die Daten als JSON liefert, arbeiten diese Utils stark mit `JsonNode` und sicheren Zugriffen wie `node.path(...)`, damit das System auch bei fehlenden Feldern stabil bleibt (vgl. [@Jackson-Docs]).

#### ClassFinder
`ClassFinder` dient dazu, aus der WebUntis-Tagesübersicht **Klassen zu suchen** und bei Bedarf einen **Tagesplan** einer bestimmten Klasse zu erstellen.
Die Klasse geht dabei durch die `rows` im JSON, prüft den `header` (Klassenname) und ermittelt zusätzlich, ob gerade eine aktuelle Stunde läuft. Dafür wird die aktuelle Zeit in das Untis-Zeitformat (z. B. 0815) umgerechnet und mit `startTime`/`endTime` verglichen.
Außerdem werden **Events** (z. B. „Wandertag“) aus den Zellen gesammelt und bei unregelmäßigen Perioden als Anzeige-Text verwendet.

```java
public static List<ClassInfoDTO> search(JsonNode root, String query) {
    String q = query.toLowerCase();
    int now = ConvertToUntisTimeUtil.nowAsUntisTime();

    for (JsonNode row : root.path("payload").path("rows")) {
        String header = row.path("header").asText("").trim(); // Klassenname
        if (!header.toLowerCase().contains(q)) continue;

        // ... periods durchsuchen und aktuelle Stunde finden (now in start/end)
    }
    return results;
}
```

### ConvertToUntisTimeUtil
`ConvertToUntisTimeUtil` ist eine kleine Hilfsklasse, die die aktuelle Uhrzeit in das von WebUntis verwendete Zeitformat umwandelt.
WebUntis arbeitet bei Zeiten häufig mit Ganzzahlen wie `0815` für 08:15 Uhr oder `1340` für 13:40 Uhr.
Damit die aktuell laufende Unterrichtseinheit einfach ermittelt werden kann, liefert die Utility-Methode die aktuelle Zeit im Format `hour * 100 + minute`.

Als Zeitzone wird bewusst `Europe/Vienna` verwendet, um sicherzustellen, dass die Zeitberechnung unabhängig von der Server- oder Container-Konfiguration korrekt erfolgt.
Die Umsetzung basiert auf der `java.time`-API, die seit Java 8 Bestandteil der Standardbibliothek ist (vgl. [@Java-Time-Docs]).

```java
public class ConvertToUntisTimeUtil {

    private static final ZoneId SCHOOL_ZONE = ZoneId.of("Europe/Vienna");

    public static int nowAsUntisTime() {
        LocalTime now = ZonedDateTime.now(SCHOOL_ZONE).toLocalTime();
        return now.getHour() * 100 + now.getMinute();
    }
}
```

### TeacherFinder

Die Klasse `TeacherFinder` übernimmt die Suche und Verarbeitung von Lehrerdaten aus der WebUntis-Tagesübersicht.
Sie arbeitet ähnlich wie der `ClassFinder`, berücksichtigt jedoch zusätzliche Informationen wie Lehrerkürzel sowie Vor- und Nachname.
Ziel ist es, aus der von WebUntis gelieferten JSON-Struktur strukturierte DTOs zu erzeugen, die im Backend weiterverwendet oder direkt an das Frontend übergeben werden können.

Ein zentrales Element ist die Methode `firstNonBlank(...)`.
Da WebUntis je nach Situation unterschiedliche JSON-Schlüssel für Fachbezeichnungen verwendet, prüft diese Methode mehrere mögliche Felder und gibt das erste nicht-leere Ergebnis zurück.
Dadurch wird sichergestellt, dass auch bei variierender Datenstruktur ein gültiger Fachname ermittelt werden kann.

```java
private static String firstNonBlank(JsonNode node, String... keys) {
    for (String key : keys) {
        String value = node.path(key).asText("");
        if (!value.isBlank()) {
            return value.trim();
        }
    }
    return "";
}
```

### TeacherHeaderParser

Der `TeacherHeaderParser` ist dafür zuständig, den von WebUntis gelieferten Header-String eines Lehrers in einzelne Bestandteile zu zerlegen.
In der Regel enthält dieser String Informationen wie **Nachname**, **Vorname** und **Kürzel**, beispielsweise im Format:
Da diese Informationen als kombinierter Text geliefert werden, wird zur Analyse ein regulärer Ausdruck (Regex) verwendet.
Reguläre Ausdrücke ermöglichen es, strukturierte Textmuster gezielt zu erkennen und einzelne Teile daraus zu extrahieren (vgl. [@Java-Regex-Docs]).

Falls der Header nicht dem erwarteten Muster entspricht, wird ein `TeacherInfoDTO` mit Default-Werten zurückgegeben. Dadurch wird verhindert, dass das Backend durch fehlerhafte oder unerwartete Eingaben abstürzt.
Gleichzeitig kann die Oberfläche weiterhin eine sinnvolle Anzeige darstellen.

```java
public class TeacherHeaderParser {

    private static final Pattern PATTERN =
            Pattern.compile("(.+?),\\s*(.+?)\\s*\\((.+?)\\)");

    public static TeacherInfoDTO parse(String header) {
        Matcher m = PATTERN.matcher(header);
        if (!m.matches()) {
            return new TeacherInfoDTO(header, "", "", "", null);
        }
        return new TeacherInfoDTO(
                header,
                m.group(1).trim(), // Nachname
                m.group(2).trim(), // Vorname
                m.group(3).trim(), // Kürzel
                null
        );
    }
}
```

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



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

## Theorie

### Grundlagen von Backend-Systemen
Was ist ein Backend System?
Das Backend ist der serverseitige Teil von jeder Softwareanwendung. 
Es gibt viele verschiede Arten von Backends in Bezug auf das Aussehen aber im Kern
erfüllen sie alle den selben Zweck. Dieser ist und bleibt die Datenverarbeitung und
Beschaffung dieser. Es ist für die Benutzer nie direkt sichtbar sondern verbirgt
sich hinter dem Frontend.
Im Gegensatz zum Frontend, welches für die Benutzeroberfläche zuständig ist, 
konzentriert sich das Backend auf die Geschäftlogik der ganzen Application. 
Besonders bei Webanwendungen spielt das Backend eine zentrale Rolle, da es als Vermittler zwischen der Benutzeroberfläche und Datenhaltung fungiert.

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

### Programmierschnittstellen (APIs) // TODO: Erweitern
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
### Überblick über die praktische Umsetzung: // TODO: Mehr elaborieren
Der praktische Teil dieser Diplomarbeit umfasst die Konzeption, Implementierung und Dokumentation des Backends sowie die Konfigurierung des Content-Management-Systems (CMS) für das entwickelte Infopoint-System. Ziel war es, eine stabile, wartbare, erweiterbare und performante serverseitige Lösung zu realisieren, welche die Verwaltung und Bereitstellung von Inhalten möglichst einfach ermöglicht.

Zu Beginn der Umsetzung wurden die funktionalen Anforderungen analysiert und gemeinsam mit dem Frontend-Team abgestimmt. Dabei wurde definiert, welche Daten benötigt werden, wie diese strukturiert gespeichert werden sollen und über welche Schnittstellen das Frontend darauf zugreifen kann.

### Planung und Systemarchitektur:
Auf Basis der Anforderungen wurde eine grundlegende Backend-Architektur entworfen. Diese basiert auf einer klaren Trennung zwischen:
- API-Schicht (Schnittstellen für das Frontend)
- Geschäftslogik (Services)
- DTOs (Data Transfare Objects, Objekte zur besseren und sicheren Datenübertragung)
- Datenzugriffsschicht (CMS)

Diese Struktur erleichtert die Wartung des Systems und ermöglicht spätere Erweiterungen.


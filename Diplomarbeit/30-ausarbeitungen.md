# Aufgabenstellung 

Die Aufgabe besteht darin, ein digitales Informationssystem für den Schulbetrieb zu konzipieren und umzusetzen. Ziel ist es, den bisherigen analogen Informationsfluss zu digitalisieren und aktuelle Informationen wie Termine, Stundenplanänderungen sowie die Aufenthaltsorte von Lehrkräften (laut Stundenplan) übersichtlich darzustellen. Zusätzlich sollen Ankündigungen, ein Social-Media-Feed und ein CMS zur Verwaltung der Inhalte bereitgestellt werden. Alle Funktionen sollen über eine benutzerfreundliche Oberfläche zugänglich sein, die sowohl für den Einsatz im Kioskbetrieb mit Touch-Bedienung als auch für die Nutzung mit Peripheriegeräten wie Maus und Tastatur optimiert ist.

## Auftraggeber

Der Auftraggeber des vorliegenden Projekts ist die HTL Leoben, eine Bildungseinrichtung, die sich kontinuierlich für die Optimierung und Modernisierung des Schulalltags einsetzt. Die HTL Leoben verfolgt mit diesem Projekt mehrere Zielsetzungen: die Verbesserung des Informationsflusses, die Reduktion papierbasierter Kommunikation im Sinne der Nachhaltigkeit sowie die Etablierung eines zentralen Anlaufpunkts für Schülerinnen und Schüler, Lehrkräfte und Besucherinnen und Besucher. Der Bedarf an einer entsprechenden Lösung ergab sich aus dem zeitaufwendigen Lokalisieren von Lehrkräften im Schulgebäude sowie aus der mangelnden Übersichtlichkeit bestehender Terminpläne und Fristen. 

## Ausgangssituation

Bei Veranstaltungen wie dem Tag der offenen Tür sowie im regulären Schulbetrieb gestaltet sich die Orientierung im Schulgebäude häufig schwierig. Besucherinnen und Besucher sowie Schülerinnen und Schüler können Räume oder Lehrpersonen nur mit erheblichem Aufwand lokalisieren. Die Informationsbereitstellung erfolgt derzeit primär über Papieraushänge, die sich als unübersichtlich und wenig flexibel erweisen. Ein modernes, digitales Informationssystem zur Behebung dieser Defizite fehlt bislang.

<!-- 
### So gehen Zitate

Hier ein einzel Zitat eines Buches das auf der Seite 17 zu finden ist:  
([@hattie_lernen_2013] S. 17) 

Zitatsammlung:  
(vergleich dazu @heise oder @t3n)  
[@hattie_lernen_2013, S. 33-35; außerdem @leeb_einfuhrung_2016, S. 6 f.]

Zitat ohne Autor  
Hattie sagte bla bla [-@hattie_lernen_2013]

Name des Autors mit Jahr in Klammern  
@hattie_lernen_2013 sagte einmal bla bla bla

Auch Videos kann man Zitieren wi Zum Biespiel hier [@Zatko15] in dieser Referenz.

Hier noch ein Zitat mit Seitenangabe [[@Zatko15] Seite 5f.]

Man darf auch ChatGPT oder andere KIs befragen um Wissen zu erlangen. Dazu muss allerdings ein PDF Log des exakten Chats in die Metadata.yaml eingetragen werden und der dort eingetragene `short-prompt` auch in der bib Datei eingefügt werden. Dann könnten indirekte Zitate so aussehen [@gpt-pandoc] oder auch so [@gpt-atomaufbau].

Wichtig ist es, das beim Author die verwendete KI eingetragen wird (mit Versionsnummern - so genau wie möglich), beim title eine kurze Referenz zum Prompt und beim Jahr - das Jahr in dem die Abfrage gemacht wurde. Das hat dem `short-prompt` aus der metadata.yaml zu entsprechen.

~~~~~
@unpublished{gpt-pandoc,
  author = {{ChatGPT 4.0}},
  title  = {Was ist Pandoc ?},
  year   = {2024},
  url={https://chat.openai.com/c/ef535195-0e39-4d5c-9c85-cdb7ec18ad03},
  urldate = {2023-02-29}
}
~~~~~ 

Oben sieht man wie ein korrekter Bibtech Eintrag für eine ChatGPT Konversation aussieht. Zusätzlich wurden hier bei URL noch die url des Chats eingetragen - was zwar praktisch ist, uns allerdings nicht von der Pflicht entbindet den Chatverlauf in der DA als PDF einzufügen.
Anzumerkein ist ebenfalls noch das wir hier ein `unpublished` Tag verwenden weil wir hier eben Quellen verwenden die in dieser Form nicht gepublished wurden.
-->

## Systembeschreibung

### Systemarchitektur

Das Infopoint-System folgt einer klassischen dreischichtigen Architektur, bestehend aus einem
Frontend, einem Backend und einem Content-Management-System (CMS). Alle drei Komponenten werden
als eigenständige Docker-Container betrieben und kommunizieren über ein gemeinsames internes
Docker-Bridge-Netzwerk (`infopoint-network`). Die vollständige Orchestrierung erfolgt mittels
Docker Compose, was eine reproduzierbare Deploymentumgebung auf jedem kompatiblen Host-System
gewährleistet.

Die Kommunikation zwischen den Schichten ist wie folgt gestaltet: Das Frontend ruft ausschließlich
die REST-API des Backends auf. Das Backend seinerseits kommuniziert mit dem Cockpit-CMS sowie mit
der externen WebUntis-Schnittstelle.

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

Das Frontend stellt eine kiosktaugliche Benutzeroberfläche bereit. Beim ersten Aufruf wird ein
Screensaver angezeigt; erst nach einer Benutzerinteraktion (Klick oder Tastendruck) wird die
Hauptnavigation zugänglich. Die Hauptseite bietet eine Kachelnavigation mit folgenden Modulen:

- **Neuigkeiten** – aktuelle Schulnews aus dem CMS, mit Detailansicht je Beitrag
- **Lageplan** – Gebäudepläne als Bilddaten, stockwerksweise abrufbar
- **Termine** – kommende Schulveranstaltungen aus dem CMS
- **Lehrer finden** – Echtzeitabfrage des aktuellen Aufenthaltsorts einer Lehrkraft laut Stundenplan
- **Stundenplan** – Tagesübersicht für Klassen und Laborbelegungspläne
- **Instagram-Feed** – Social-Media-Inhalte der Schule

Das Routing erfolgt client-seitig über React Router DOM. Alle Seiten sind als lazy-geladene
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
| `/api/v1/laborplaene` | GET | Alle Laborstundenpläne |
| `/api/v1/laborplaene/{id}` | GET | Einzelnen Laborplan laden |
| `/api/v1/laborplaene/image?path=` | GET | Bilddaten eines Laborplans |
| `/api/v1/map` | GET | Metadaten aller Gebäudekarten |
| `/api/v1/map/image` | GET | Standardgebäudekarte als PNG |
| `/api/v1/map/image/{floor}` | GET | Gebäudekarte eines bestimmten Stockwerks |
| `/api/v1/health` | GET | Systemstatus |

:Schnittstellen

Die interne Struktur des Backends folgt dem klassischen Schichtmodell: Controller nehmen
HTTP-Anfragen entgegen und delegieren an Service-Klassen, welche die Geschäftslogik
kapseln. Für die Kommunikation mit externen Systemen sind dedizierte Client-Klassen
(`CockpitClient`, `WebUntisClient`) vorgesehen. Hilfsklassen (`TeacherFinder`,
`ClassFinder`, `TeacherHeaderParser`) übernehmen das Parsen und Aufbereiten der von
WebUntis zurückgelieferten Daten. Data-Transfer-Objekte (DTOs) entkoppeln die interne
Datenstruktur von der API-Darstellung.

**Content-Management-System (Cockpit CMS)**

Cockpit CMS wird als headless CMS eingesetzt und ist ausschließlich für das Redaktionspersonal
der Schule zugänglich (Port 8080). Es verwaltet folgende Inhaltstypen: Neuigkeiten (`news`),
Termine (`events`), Gebäudepläne (`maps`) sowie Laborstundenpläne (`laborplaene`). Das Backend
greift über die Cockpit-REST-API mit einem API-Schlüssel auf diese Inhalte zu.

### Datenflüsse

Folgende Datenflüsse sind im System zentral:

1. **CMS-Inhalte**: Das Redaktionspersonal pflegt Inhalte (News, Termine, Karten, Labordaten) im
   Cockpit-CMS-Backend. Das Spring-Boot-Backend fragt diese per HTTP-GET von der Cockpit-API
   ab und reicht sie als aufbereitete DTOs an das Frontend weiter.

2. **Stundenplan-Echtzeitdaten**: Bei einer Lehrkraft- oder Klassensuche sendet das Backend eine
   HTTP-POST-Anfrage an die WebUntis-Monitor-API (`https://htlleoben.webuntis.com/WebUntis/monitor/dayoverview/data`).
   Die zurückgelieferten JSON-Daten werden serverseitig geparst, gefiltert und als strukturierte
   DTO-Liste an das Frontend geliefert.

3. **Bilddaten**: Gebäudekarten und Laborplan-Bilder werden vom Backend als Byte-Arrays aus dem
   Cockpit-CMS geladen und direkt als `image/png`- bzw. `image/jpeg`-Responses an das Frontend
   ausgeliefert, ohne dass das Frontend direkten Zugriff auf das CMS benötigt.

### Schnittstellen zu externen Systemen

Das System bindet zwei externe Dienste an:

- **WebUntis** (`htlleoben.webuntis.com`): Die öffentlich zugängliche Monitor-API von WebUntis
  liefert Tagesübersichten für Lehrkräfte und Klassen. Die Schnittstelle wird über HTTP-POST mit
  JSON-Body angesprochen; eine Authentifizierung ist für die Monitoransicht nicht erforderlich.

- **Instagram**: Die Anwendung verfügt über eine eigene Seite für einen Instagram-Feed
  (`/insta`). Die konkrete Einbindung (über einen Iframe) ist in der gleichnamigen Frontend-Komponente (`InstaFeedPage`) umgesetzt.

### Benutzeroberfläche

Die Benutzeroberfläche ist für den Kioskeinsatz auf einem Touchscreen-Display optimiert. Beim
Start zeigt das System einen Screensaver mit dem Schulnamen und einem Hinweis zur Aktivierung.
Nach der Aktivierung erscheint eine Kachel-Hauptnavigation, von der aus alle Module direkt
erreichbar sind. Die Gestaltung verwendet CSS-Module für komponentenlokales Styling sowie
Material Icons für eine konsistente Ikonografie. Eine responsive Layoutstruktur gewährleistet
die Bedienbarkeit sowohl per Touch als auch mit Maus und Tastatur.

### Sicherheitskonzept

Durch die Architektur als geschlossenes Docker-Netzwerk sind das Backend und das CMS nicht
direkt aus dem öffentlichen Netz erreichbar; lediglich das Frontend (Port 3000) ist für Endnutzer
gedacht. Das CMS (Port 8080) und das Backend (Port 8888) sind im Produktivbetrieb durch
Netzwerkkonfiguration oder einen vorgeschalteten Reverse Proxy zu schützen. Die Authentifizierung
gegenüber dem Cockpit-CMS erfolgt über einen API-Schlüssel, der als Umgebungsvariable
(`COCKPIT_API_KEY`) konfiguriert wird und nicht im Quellcode hinterlegt ist. Personenbezogene
Daten werden im System nicht gespeichert; Stundenplan-Abfragen erfolgen auf Basis öffentlich
zugänglicher Monitoransichten. 


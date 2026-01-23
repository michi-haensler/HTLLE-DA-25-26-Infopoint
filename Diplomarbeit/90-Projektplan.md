# Projekthandbuch
\textauthor{Michael Hänsler}

## Entwicklungsplan

### Projektauftrag

Der Projektauftrag umfasst die Entwicklung eines digitalen Infopoints für die HTL Leoben. Dieser Infopoint soll zentrale schulrelevante Informationen wie Stundenplanänderungen, Vertretungen und schulinterne Neuigkeiten anzeigen. Die Informationen werden über ein Touch-Display bereitgestellt, das an einem zentralen Ort im Schulgebäude montiert wird. Die Hardware wird nicht eigenständig entwickelt. Stattdessen wird eine All-in-One-Lösung evaluiert, die idealerweise keine proprietäre Software mitbringt, sodass die projektspezifische Anwendung direkt darauf bereitgestellt werden kann. Als Verwaltungssystem für Inhalte ist die Integration eines Open-Source-CMS vorgesehen.
Ein besonderer Fokus liegt auf der benutzerfreundlichen Gestaltung der Oberfläche sowie auf Mehrsprachigkeit, um eine zukunftsfähige Lösung zu gewährleisten.


#### Projektziele

Das Projekt verfolgt mehrere Kernziele. Zunächst erfolgt die Auswahl eines geeigneten Hardwaresystems für den Schulbetrieb im Innenbereich. Darauf aufbauend wird ein funktionales Infopoint-System für Touch-Displays entwickelt, das aktuelle schulische Informationen wie Veranstaltungen, Raumpläne, Stundenpläne, den Aufenthalt von Lehrpersonen sowie einen Social-Media-Feed darstellt. Die Administrierbarkeit wird durch die Integration eines Content-Management-Systems (CMS) gewährleistet. Das UI/UX-Design fokussiert auf Barrierefreiheit und Mehrsprachigkeit (Deutsch und Englisch). Die Lösung wird zukunftssicher und erweiterbar konzipiert.

#### Nicht-Ziele bzw. nicht Inhalte

Explizit vom Projektumfang ausgeschlossen sind die Entwicklung eines eigenen Hardwaresystems, die Anzeige der vollständigen Stundentafel der Lehrpersonen, die Lokalisierung des Systems in sämtliche Sprachen sowie die Entwicklung eines eigenständigen CMS-Systems.

#### Projektnutzen

Die derzeitige Informationsverteilung erfolgt über Aushänge oder verschiedene digitale Plattformen, was zu Ineffizienz und mangelnder Übersichtlichkeit führt. Durch die zentrale Anzeige über den Infopoint wird dieser Zustand verbessert und eine Zeitersparnis für alle Beteiligten angestrebt. 

#### Projektauftraggeber

Der Auftraggeber dieses Projekts ist die HTL Leoben. Die Schulleitung und das Lehrpersonal sind bestrebt, den Schülerinnen und Schülern einen Mehrwert zu bieten und den Schulalltag zu erleichtern.

#### Projekttermine

| Termin     | Inhalt                          |
|-----------:|:--------------------------------|
| 24-06-2025 | Erstpräsentation                |
| 01-07-2025 | Projektstart                    |
| 05-09-2025 | Antrag Diplomarbeitsportal stellen |
| 01-11-2025 | 1. Zwischenpräsentation |
| 09-01-2026 | Abgabe der ersten Gesamtversion der Arbeit |
| 23-02-2026 | 2. Zwischenpräsentation |
| 06-03-2026 | Abgabe der finalen Korrekturversion in Papierform |
| 07-04-2026 | Abgabeschluss der Bibliotheksversion |
| 08-04-2026 | DA-Präsentation |
|||

: Projektterminübersicht


#### Projektkosten

##### Projektkosten (geplant)

| Kostenpunkt | Kostenart | Menge  | Preis   | Gesamtkosten | Deckung durch |
|:-------------|:---------:|:------:|--------:|-------------:|---------------|
| Hardware     | Hardware  |  1 |   0 | 0     | Auftraggeber       |
| Personal | Personalkosten | 3 | 8.100,00 | 24.300,00 | Auftraggeber|
| Chat-GPT Plus| Sonstiges  |  1    |  23,00 | 23,00      | Schüler |
| DA-Binden | Druck |  1     |   50,00 |  50,00      | Schüler |


 : Geplante Projektkosten
 
Das Gesamtprojekt beläuft sich auf Kosten von 24.373,00 Euro. 

##### Projektkosten (tatsächlich)

<!-- ToDo: Am Ende der Diplomarbeit ist hier eine Aufstellung der tatsächlich angefallenen Kosten einzufügen. -->

#### Projektrisiken

| Risiko         | EW  | Auswirkungen     | Maßnahmen     |
|:--------------:|:---:| :----------------|:--------------|
| Grafische Oberfläche nicht einfach zu verstehen| 10% | Infopoint wird kaum genutzt | An Best-Practice-Beispielen orientieren und gegebenenfalls Usability-Test durchführen |
| Fehlende Kommunikation mit dem Betreuer | 10% | Entscheidungen verzögern sich und es entstehen Unsicherheiten | Regelmäßige Besprechungen einplanen |
| Probleme mit der WebUntis-Schnittstelle  | 20% | Feature, um Lehrer zu finden und Stundenpläne anzuzeigen, kann nicht umgesetzt werden | Früh genug mit der Schnittstelle befassen und diese testen |
| Verzögerung im Zeitplan | 30% | Das Projekt kann nicht rechtzeitig abgeschlossen werden | Früh genug anfangen und genügend Puffer einplanen |
| Fehlende Motivation | 30%| Zeitplan kann nicht eingehalten werden| Genügend Meilensteine setzen und sich gegenseitig im Team kontrollieren |

: Projektrisiken

### Projektorganisation

#### Projektbeteiligte

| Vorname     | Nachname     | Organisation | Kontaktinfos      |
|:------------|:-------------|:-------------|:------------------|
| Michael | Hänsler | HTL Leoben | 211witb08@o365.htl-leoben.at |
| Simon | Moser | HTL Leoben     | 220131@o365.htl-leoben.at |
| Lukas | Fellegger | HTL Leoben | 211witb05@o365.htl-leoben.at |
| Zacharias | Markus | HTL Leoben | zama@o365.htl-leoben.at |
| Sebastian | Steiner | HTL Leoben | stse@o365.htl-leoben.at |
| Christian | Hofer | HTL Leoben | hch@o365.htl-leoben.at|

: Projektbeteiligte

#### Projektrollen

| Projektrolle           | Rollenbeschreibung     | Name              |
|------------------------|------------------------|-------------------|
| Projektleiter | Verantwortlicher für Einhaltung des Projektrahmens | Michael Hänsler |
| Auftraggeber | Auftraggeber der internen Diplomarbeit | Christian Hofer |
| Betreuer | Schulischer Betreuer | Markus Zacharias |
| Betreuer Stv. | Schulischer Betreuer | Sebastian Steiner |
| Projektmitglied | Backend Entwickler | Simon Moser |
| Projektmitglied | Frontend Entwickler | Lukas Fellegger|

: Projektrollen

![Projektorganisationsdiagramm](img/projektorganisation.png){width=50%}

### Vorgehen bei Änderungen

Sämtliche Änderungen am Projektumfang, den Meilensteinen oder Anwendungsfällen erfordern eine Abstimmung mit dem Betreuer und gegebenenfalls dem Auftraggeber.

Der Informationsfluss ist wie folgt geregelt: Änderungen werden im Team-Chat und in Besprechungen dokumentiert. Der Betreuer und der Projektleiter werden über alle Änderungen informiert. Alle Änderungen werden schriftlich im Änderungsprotokoll des GitHub-Repositorys vermerkt.

## Meilensteine

### 05.09.2025: Antrag Diplomarbeitsportal gestellt

- Antrag Diplomarbeitsportal gestellt

### 19.09.2025: Recherche Abgeschlossen

- Recherche zu verschiedenen Infopoint Systemen in unterschiedlichen Preiskategorien abgeschlossen
- Auswahl wird dem Auftraggeber vorgelegt

### 25.09.2025: Technologie Auswahl und Mockups

- Erstellung funktionaler Mockups abgeschlossen
- Software-Auswahl für Front- und Backend abgeschlossen

### 13.10.2025: Fertigstellung Rohversionen Front- und Backend

- Fertigstellung der ersten Versionen von Front- und Backend 

### 20.10.2025: Anbindung eines CMS Systems abgeschlossen

- Ein CMS-System wurde über REST-Schnittstellen angebunden
      
### 27.10.2025: Vereinigung von Front- und Backend

- Vereinigung von Front- und Backend abgeschlossen

### 10.11.2025: 1. Zwischenpräsentation

- Präsentation des aktuellen Stands

### 17.11.2025: Testphase auf Endgerät abgeschlossen

- Feedback eingeholt, um mögliche Verbesserungen vorzunehmen.

### 24.11.2025: Verbesserungen umgesetzt

- Feedback eingeholt, um mögliche Verbesserungen vorzunehmen.

### 23.12.2025: Diplomarbeit fertig verschriftlicht 

- Stilfehler sind behoben
- DA-Dokumentationsblatt ist unterschrieben, eingescannt und im Hauptdokument enthalten 
- Praxisteil ist abgeschlossen und verschriftlicht
- Informationen sind im DA-Portal eingegeben
- Unterschriebene DA-Betreuungsprotokolle sind in der DA enthalten
- DA liegt dem Betreuer in ausgedruckter Form vor

### 01.01.2026: Projektabschluss

### 09.01.2026: Abgabe der ersten Gesamtversion der Arbeit

- Abgabe der ersten Gesamtversion


### 23.02.2026: 2. Zwischenpräsentation

- Präsentation des aktuellen Standes 

### 06.03.2026: Abgabe der finalen Korrekturversion in Papierform

### 07-04-2026: Abgabeschluss der Bibliotheksversion

### 08.04.2026: Diplomarbeits-Abschlusspräsentation
    

## Anwendungsfälle

Dieser Abschnitt beschreibt die Anwendungsfälle (Use Cases) der Anwendung. Die Beschreibung erfolgt auf hohem Abstraktionsniveau ohne implementierungsspezifische Details. Die Benennung orientiert sich an den Zielen aus Sicht der Akteure, beispielsweise „Mitglied anmelden", „Geld abheben" oder „Auto zurückgeben".

Jeder Anwendungsfall wird nach einem einheitlichen Muster beschrieben. In den folgenden Absätzen findet sich zunächst eine allgemeine Beschreibung der Anwendungsfallstruktur, gefolgt von einem konkreten Beispiel.

Zur Veranschaulichung der Interaktion zwischen Akteuren und Anwendungsfällen dient folgende Übersichtsgrafik:

![Übersicht Anwendungsfälle](img/anwendungsfalldiagramm.png){width=60%}

\newpage
### Anwendungsfallname
Anwendungsfälle erhalten einen eindeutigen Namen, aus dem sich der Inhalt des Anwendungsfalls ableiten lässt. Bei agiler Arbeitsweise entspricht ein Anwendungsfall einer User Story im Backlog, die im Laufe des Projekts (in einem Sprint) abgearbeitet wird.

#### Kurzbeschreibung
Dieser Abschnitt enthält eine kurze Beschreibung des Anwendungsfallinhalts im Umfang von zwei bis drei Zeilen.
      
#### Trigger
Der fachliche Auslöser für die Ausführung dieses Anwendungsfalls.

#### Vorbedingung
Alle Bedingungen, die erfüllt sein müssen, damit dieser Anwendungsfall ausgeführt werden kann. Falls keine Vorbedingungen existieren, wird „keine" angegeben.
      
#### Nachbedingung
Der erwartete Zustand nach einem erfolgreichen Durchlauf des Anwendungsfalls.

#### Akteure
Akteure sind beteiligte Personen oder Systeme außerhalb des beschriebenen Systems, beispielsweise Anwender, angemeldete Anwender, Kunden, Systeme oder Abrechnungsprozesse.

#### Standardablauf
Dieser Abschnitt stellt das typische Szenario dar, das leicht verständlich oder am häufigsten vorkommend ist. Am Ende steht die Zielerreichung des Primärakteurs. Die Ablaufschritte werden nummeriert und in strukturierter Sprache beschrieben. Ablaufpläne können ebenfalls verwendet werden. Mittels UML lassen sich diese Ablaufschritte in Aktivitätsdiagrammen oder anwendungsfallorientierten Sequenzdiagrammen darstellen.

#### Fehlersituationen
Szenarien, die sich außerhalb des Standardablaufs bei der versuchten Zielerreichung ereignen können. Sie werden als konditionale Verzweigungen der normalen Ablaufschritte dargestellt. Am Ende steht ein Misserfolg, die Zielerreichung des Primärakteurs oder eine Rückkehr zum Standardablauf.

#### Systemzustand im Fehlerfall
Der erwartete Zustand nach einem erfolglosen Durchlauf des Anwendungsfalls.


\newpage
### Informationen beschaffen
#### Kurzbeschreibung
Der Endverbraucher (User) ruft über den Infopoint Informationen zu aktuellen Veranstaltungen, Events, Vertretungen oder Raumplänen ab.

#### Trigger
Der User tippt auf den Startbildschirm, um zur Benutzeroberfläche zu gelangen.

#### Vorbedingung
Der Infopoint ist eingeschaltet und betriebsbereit. Der Endverbraucher befindet sich vor dem Gerät.
      
#### Nachbedingung
Der User hat alle benötigten Informationen erhalten.

#### Akteure
Endverbraucher (User)

#### Fehlersituationen
Der Infopoint kann aufgrund fehlender Internetverbindung oder anderer technischer Störungen nicht auf aktuelle Daten zugreifen.

#### Systemzustand im Fehlerfall
Dem User wird eine Fehlermeldung angezeigt.

#### Standardablauf

1. Der User nähert sich dem Infopoint und tippt auf den Bildschirm, um den Bildschirmschoner zu deaktivieren.
2. Auf dem Homescreen wird eine Auswahl an Funktionen angezeigt.
3. Durch Auswahl der gewünschten Funktion werden die entsprechenden Informationen dargestellt.

#### Alternativabläufe

Falls die gewünschte Funktion nicht verfügbar ist, wird eine Fehlermeldung ausgegeben.

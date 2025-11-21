# Theorie- und Praxisteil – Themenübersicht (Frontend)

## 1. Einführung in das Projekt und Zielsetzung
### 1.1 Ausgangssituation
→ Warum der Infopoint modernisiert wird, Probleme der alten Lösung, fehlende Aktualisierung, manuelle Wartung.

### 1.2 Zielsetzung des Frontend-Systems
→ Ein modernes, schnelles, wartbares Frontend, das alle Informationen dynamisch zeigt.

### 1.3 Anforderungen
→ Übersichtliche UI, CMS-Anbindung, schnelle Ladezeiten, responsives Design.

## 2. Grundlagen moderner Webentwicklung
### 2.1 Client-Server-Modell
→ Browser sendet Requests, Server liefert Daten; wie ein Web-Frontend arbeitet.

### 2.2 REST-Architektur
→ Datenzugriff über Endpoints (GET, POST), sauber getrennt.

### 2.3 Single Page Applications (SPA)
→ Seite lädt einmal, Inhalt ändert dynamisch → schnellere User Experience.

### 2.4 Moderne Frontends im Schulbetrieb
→ Warum ein digitales Infodisplay sinnvoll ist; Vorteile bei Aktualität.

## 3. React als Grundlage
### 3.1 Geschichte & Motivation
→ Warum React entstanden ist, Probleme die es löst.

### 3.2 Komponentenbasiertes Design
→ UI wird in kleine Teile zerlegt → wiederverwendbar.

### 3.3 Virtual DOM
→ Verbesserte Performance durch simulierten DOM.

### 3.4 State, Props, Lifecycle
→ Wie Komponenten Daten speichern, weitergeben und aktualisieren.

### 3.5 React Hooks
→ useState, useEffect, useMemo → moderne Art Logik einzubauen.

## 4. Projektarchitektur im Frontend
### 4.1 Ordnerstruktur
→ Pages, Components, Assets, Services – alles sauber getrennt.

### 4.2 Component-Driven Development
→ Erst UI-Komponenten, danach Seiten → saubere Entwicklung.

### 4.3 Wiederverwendbarkeit
→ Buttons, Cards, Layout-Komponenten mehrfach nutzbar.

### 4.4 Routing
→ Navigation zwischen Seiten über React Router.

## 5. UI/UX Grundlagen
### 5.1 Responsive Design
→ Layout passt sich allen Bildschirmgrößen an.

### 5.2 Mobile-First vs. Desktop-First
→ Warum Desktop-First beim Infopoint sinnvoll ist.

### 5.3 Farbschema und Typografie
→ Farben der HTL, serifenlose Schrift für gute Lesbarkeit.

### 5.4 Accessibility
→ Kontraste, Schriftgrößen, Screenreader-Freundlichkeit.

### 5.5 Informationsarchitektur
→ Inhalte logisch strukturiert → Benutzer findet alles schnell.

## 6. Styling-Konzept
### 6.1 Material Icons
→ Einheitliche Icons, Farben abhängig vom Kontext.

### 6.2 Tailwind / CSS-Module / Styled Components
→ Vorteile der genutzten Styling-Technik.

### 6.3 Theme-Konzept
→ Einheitliche Farben, Abstände, Wiedererkennungswert.

### 6.4 Design-System (Cards, Buttons, Listen)
→ Wiederkehrende UI-Elemente für konsistentes Design.

## 7. CMS-Anbindung
### 7.1 Datenfluss
→ CMS → Backend → API → Frontend.

### 7.2 Dynamische Inhalte
→ Texte, Bilder und Links werden automatisch aktualisiert.

### 7.3 Vorteile Headless CMS
→ Trennung von Content und UI, Editor kann Inhalte ohne Entwickler ändern.

### 7.4 Sicherheit
→ API-Keys, Zugriffsschutz, CORS.

## 8. State Management
### 8.1 Lokaler State
→ useState für Suche, Filter, UI-Zustände.

### 8.2 Globaler State
→ Kontext für globale Daten wie Lehrer, News usw.

### 8.3 Caching & Performance
→ Daten werden nur einmal geladen und wiederverwendet.

## 9. Bilder-Handling
### 9.1 Lazy Loading
→ Bilder nur laden wenn nötig → Performance.

### 9.2 Responsive Images
→ Automatische Skalierung je nach Gerätegröße.

### 9.3 Dynamische Updates
→ Lageplan/Bilder werden per CMS einfach austauschbar.

## 10. Fehlerbehandlung
### 10.1 Frontend-Validierung
→ Eingaben prüfen, bevor sie gesendet werden.

### 10.2 Error Boundaries
→ React fängt Fehler ab, ohne dass alles abstürzt.

### 10.3 Nutzerfeedback
→ Fehlermeldungen verständlich anzeigen.

## 11. Performanceoptimierung
### 11.1 Minimierung der Bundle-Größe
→ Nur benötigte Libraries laden.

### 11.2 Code-Splitting
→ Seiten werden erst geladen, wenn man sie braucht.

### 11.3 Caching
→ API-Daten speichern → weniger Requests.

## 12. Testing
### 12.1 Unit-Tests
→ Einzelne Funktionen testen.

### 12.2 Komponenten-Tests
→ Testen der UI-Elemente.

### 12.3 E2E-Tests
→ Vollständige Nutzerabläufe testen.

## 13. Sicherheitsaspekte
### 13.1 Authentifizierung
→ Login-System (falls genutzt).

### 13.2 XSS-Vermeidung
→ Inhalte aus CMS richtig escapen.

### 13.3 Datensicherheit
→ API-Daten nicht im LocalStorage exponieren.

## 14. Vergleich mit Alternativen
### 14.1 React vs. Vue
→ Unterschiede in Komponenten und Syntax.

### 14.2 React vs. Angular
→ Angular Framework vs. React Library.

## 15. Zusammenfassung
→ Wichtigste Erkenntnisse des Theorieteils.

---

# PRAKTISCHER TEIL

## 1. Überblick
### 1.1 Projektaufbau
→ Technisches Setup + Rollenverteilung.

### 1.2 Verantwortlichkeiten
→ Dein Bereich: komplett das Frontend.

## 2. Projektinitialisierung
### 2.1 Setup
→ React installiert, Vite/CRA genutzt.

### 2.2 Libraries
→ Router, Material Icons, evtl. Tailwind etc.

### 2.3 Ordnerstruktur
→ Komponenten-Ordner, Pages, Assets, Services.

## 3. Navigation
### 3.1 Navbar Aufbau
→ Logo, Seitenlinks, Farben.

### 3.2 Icon-Farben
→ Weiß in Navbar, schwarz in Cards.

### 3.3 Routing
→ Jede Seite bekommt eine eigene Route.

## 4. Startseite
### 4.1 Layout
→ Übersichtliche Hauptseite mit Karten/Buttons.

### 4.2 Komponenten
→ Grid-Komponenten für Infos.

### 4.3 Responsivität
→ Passt sich an große/kleine Displays an.

## 5. Lageplan-Seite
### 5.1 Bildanzeige
→ Lageplan wird angezeigt.

### 5.2 Buttons
→ Buttons ändern das Plan-Bild.

### 5.3 CMS-Verbindung
→ Bilder sind austauschbar.

## 6. Termin-Seite
### 6.1 Termin-Karten
→ Termine als Cards mit Titel, Datum.

### 6.2 Detailanzeige
→ Pfeil → Artikelseite.

### 6.3 CMS-Daten
→ Inhalte werden dynamisch geladen.

## 7. Neuigkeiten-Seite
### 7.1 Newsfeed
→ Beiträge als Karten.

### 7.2 Artikelansicht
→ Ganze News mit Text & Bild.

### 7.3 CMS-Anbindung
→ Beiträge kommen vom CMS.

## 8. Lehrersuche
### 8.1 Suchfeld
→ Filtert die Lehrerliste live.

### 8.2 Anzeige
→ Foto, Name, Fachgebiet.

### 8.3 CMS-Daten
→ Lehrerinfos dynamisch pflegbar.

## 9. Stundenpläne
### 9.1 Unterteilung
→ Klassenstundenpläne / Laborstundenpläne.

### 9.2 Anzeige großer PDFs/Bilder
→ Optimiertes Laden.

### 9.3 Responsive Darstellung
→ Zoomen/Skalieren.

## 10. Screensaver
### 10.1 Konzept
→ Automatische Bildrotation.

### 10.2 Logik
→ Timer, Übergänge.

### 10.3 CMS
→ Bilder jederzeit tauschbar.

## 11. API-Kommunikation
### 11.1 GET-Requests
→ Inhalte über API abrufen.

### 11.2 Verarbeitung
→ Daten rendern.

### 11.3 Fehlerbehandlung
→ Loading/Error-State.

## 12. Deployment
### 12.1 Build
→ Produktionsbuild.

### 12.2 Veröffentlichung
→ Deployment auf Infopoint.

### 12.3 Updates
→ CMS macht neue Builds unnötig.

## 13. Herausforderungen
### 13.1 Bilderhandling
→ Große Dateien, verschiedene Formate.

### 13.2 Performance
→ Viele Bilder → optimieren.

### 13.3 Navigation
→ UX, saubere Pfade.

## 14. Ausblick
### 14.1 Mobile-Version
### 14.2 Erweiterte CMS-Funktionen
### 14.3 Mehr Displays

## 15. Praxis-Fazit
→ Nutzen, Ergebnis, Lernerfahrung.

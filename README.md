# Infopoint Diplomarbeit

[![Backend](https://img.shields.io/badge/Backend-Spring%20Boot%203.3.5-6DB33F?logo=springboot&logoColor=white)](Infopoint/backend/pom.xml)
[![Frontend](https://img.shields.io/badge/Frontend-React%2019%20%2B%20Vite-61DAFB?logo=react&logoColor=black)](Infopoint/frontend/package.json)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker&logoColor=white)](Infopoint/docker-compose.yml)
[![CMS](https://img.shields.io/badge/CMS-Cockpit-000000)](Infopoint/resources/cockpit-data/)

Willkommen im Infopoint-Projekt der HTL Leoben. Dieses Repository enthält eine vollständige Infopoint-Lösung für die Schule: ein Cockpit-CMS zur Inhaltsverwaltung, ein Spring‑Boot‑Backend als REST‑API und ein React‑Frontend für die Anzeige am Infopoint‑Screen.

Dieses Handbuch ist die zentrale Anlaufstelle für Setup, Betrieb, Inhalte, Erweiterungen und Best Practices.

---

## Inhaltsverzeichnis

- [Ziele und Einsatz](#ziele-und-einsatz)
- [Systemübersicht](#systemübersicht)
- [Features](#features)
- [Schnellstart mit Docker](#schnellstart-mit-docker)
- [Lokale Entwicklung](#lokale-entwicklung)
- [Inhalte im Cockpit verwalten](#inhalte-im-cockpit-verwalten)
- [Konfiguration](#konfiguration)
- [Datenfluss und Architektur](#datenfluss-und-architektur)
- [Projektstruktur](#projektstruktur)
- [Betrieb und Deployment](#betrieb-und-deployment)
- [Fehlerbehebung](#fehlerbehebung)
- [FAQ](#faq)
- [Mitwirken](#mitwirken)

---

## Ziele und Einsatz

Der Infopoint dient als digitale Informationsdrehscheibe für die HTL Leoben. Inhalte werden zentral gepflegt und auf Bildschirmen aktuell, klar und visuell ansprechend dargestellt. Typische Einsatzszenarien:

- Informationsanzeigen im Eingangsbereich
- Tagesaktuelle News und Events
- Raum‑ und Klassenübersichten
- Labor‑ und Stundenpläne
- Interne Aushänge und Bildergalerien

---

## Systemübersicht

Das Projekt besteht aus drei Diensten:

1. **Cockpit CMS** – Content‑Management, Uploads, Redaktionsoberfläche
2. **Backend** – Spring Boot REST‑API, Datenaufbereitung und Business‑Logik
3. **Frontend** – React‑App für die Anzeige am Screen

Docker Compose verbindet alle Dienste in einem internen Netzwerk und stellt Ports lokal bereit.

---

## Features

- **Zentrale Inhaltsverwaltung** über Cockpit CMS
- **API‑First‑Architektur** für klare Trennung von Inhalt und Darstellung
- **Modulare Frontend‑Seiten** für News, Events, Karten, Infos, Screensaver
- **Container‑Deployment** in einem Schritt mit Docker Compose
- **Entwicklungsfreundlich**: Hot Reload, klare Struktur, einfache Erweiterbarkeit

---

## Schnellstart mit Docker

Voraussetzungen:
- Docker Desktop installiert

Start im Ordner [Infopoint](Infopoint):

```bash
cd Infopoint
docker compose up --build
```

Danach sind die Dienste erreichbar:

- **Cockpit CMS**: http://localhost:8080
- **Backend API**: http://localhost:8888
- **Frontend**: http://localhost:3000

Die Cockpit‑Daten liegen lokal unter [Infopoint/resources/cockpit-data/](Infopoint/resources/cockpit-data/) und bleiben auch nach Neustarts erhalten.

---

## Lokale Entwicklung

### Backend (Spring Boot)

Voraussetzungen:
- Java 21
- Maven oder der Wrapper [Infopoint/backend/mvnw](Infopoint/backend/mvnw)

Start:

```bash
cd Infopoint/backend
./mvnw spring-boot:run
```

### Frontend (React + Vite)

Voraussetzungen:
- Node.js (LTS)

Start:

```bash
cd Infopoint/frontend
npm install
npm run dev
```

Das Frontend läuft dann standardmäßig auf http://localhost:5173.

---

## Inhalte im Cockpit verwalten

Das Cockpit‑CMS ist eure zentrale Stelle für Inhalte. Dort könnt ihr:

- News‑Artikel anlegen und bearbeiten
- Events pflegen
- Kartenpläne und Raumpläne verwalten
- Medien (Bilder, PDFs) hochladen

Die Inhalte werden in [Infopoint/resources/cockpit-data/](Infopoint/resources/cockpit-data/) gespeichert.

---

## Konfiguration

### Relevante Umgebungsvariablen

- `SPRING_PROFILES_ACTIVE` – aktiviert das Docker‑Profil
- `COCKPIT_URL` – URL des Cockpit‑Servers
- `COCKPIT_API_KEY` – API‑Key für den Zugriff aus dem Backend

Die Standard‑Definitionen befinden sich in [Infopoint/docker-compose.yml](Infopoint/docker-compose.yml).

---

## Datenfluss und Architektur

1. Inhalte werden im Cockpit CMS gepflegt.
2. Das Backend fragt Inhalte vom CMS ab und bereitet sie auf.
3. Das Frontend lädt die Daten aus der REST‑API und rendert sie für den Screen.

Diese Trennung sorgt für klare Zuständigkeiten, geringere Kopplung und einfache Erweiterbarkeit.

---

## Projektstruktur

```
DA-25-26-Infopoint/
  Infopoint/
    backend/   # Spring Boot API
    frontend/  # React UI
    resources/ # Cockpit Inhalte und Uploads
```

---

## Betrieb und Deployment

Empfohlene Variante: Docker Compose aus [Infopoint/docker-compose.yml](Infopoint/docker-compose.yml).

Für produktiven Betrieb:

- Ports hinter Reverse Proxy (z. B. Nginx) legen
- HTTPS terminieren
- API‑Key nur serverseitig verwenden
- Regelmäßige Backups von [Infopoint/resources/cockpit-data/](Infopoint/resources/cockpit-data/)

---

## Fehlerbehebung

**Frontend zeigt keine Daten**
- Prüfen, ob Backend läuft und unter http://localhost:8888 erreichbar ist
- Prüfen, ob Cockpit erreichbar ist (http://localhost:8080)

**Cockpit startet, aber Inhalte fehlen**
- Sicherstellen, dass [Infopoint/resources/cockpit-data/](Infopoint/resources/cockpit-data/) korrekt gemountet ist

**Backend startet nicht**
- Java 21 installiert und aktiv
- Maven Wrapper vorhanden und ausführbar

---

## FAQ

**Kann ich neue Seiten hinzufügen?**
Ja. Neue Seiten werden im Frontend unter [Infopoint/frontend/src/pages/](Infopoint/frontend/src/pages/) angelegt und im Routing eingebunden.

**Wie erweitere ich die API?**
Neue Endpoints, Services und Modelle werden im Backend ergänzt. Startpunkt sind die Pakete unter [Infopoint/backend/src/main/java/](Infopoint/backend/src/main/java/).

**Wie sichere ich die Inhalte?**
Regelmäßige Backups von [Infopoint/resources/cockpit-data/](Infopoint/resources/cockpit-data/) reichen für eine vollständige Wiederherstellung.

---

## Mitwirken

Beiträge sind willkommen. Dokumentiert Änderungen in dieser Datei und haltet eure Module gut strukturiert.

Wenn ihr Hilfe mit dem Diplomarbeit‑Template braucht, findet ihr diese in [USAGE.md](USAGE.md).

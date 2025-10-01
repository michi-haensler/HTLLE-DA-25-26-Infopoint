# Infopoint Diplomarbeit

Dieses Projekt besteht aus zwei getrennten Anwendungen:  
- **Backend** (Spring Boot, REST API, MySQL/H2)  
- **Frontend** (React mit Vite, TypeScript)  

Beide liegen in eigenen Ordnern (`backend/` und `frontend/`) und können unabhängig voneinander entwickelt und gestartet werden.

---

## ⚙️ Techstack

### Backend
- **Java 21** (Spring Boot)
- **Spring Boot Starter**:
  - Spring Web (REST-Controller)
  - Spring Data JPA (ORM)
  - Validation (Bean Validation)
  - H2 Database (für Entwicklung)
  - MySQL Driver (für Produktion)
- **Build Tool:** Maven  
- **Datenbankprofile:** H2 (dev), MySQL (prod) über `application.yml`

### Frontend
- **React 18** mit **TypeScript**
- **Vite** als Dev-Server & Bundler
- Standard-Setup aus `npm create vite@latest frontend -- --template react-ts`
- Erweiterbar mit:
  - `react-router-dom` (Routing)
  - `axios` oder `fetch` (API-Calls)
  - TailwindCSS / CSS Modules / Styled Components für Styling

---

## 📂 Projektstruktur

```plaintext
/ProjektRoot
│
├── backend/                    # Spring Boot Backend
│   ├── src/main/java/...       # Java Code
│   │   ├── controller/         # REST Endpoints
│   │   ├── service/            # Business-Logik
│   │   ├── repository/         # JPA Repositories
│   │   ├── model/              # Entities
│   │   └── config/             # z. B. CORS-Konfig
│   ├── src/main/resources/
│   │   ├── application.yml     # H2 (dev) & MySQL (prod) Profile
│   │   ├── data.sql            # optionale Seed-Daten
│   │   └── static/             # (optional) React Build für Deployment
│   ├── pom.xml
│   └── ...
│
├── frontend/                   # React Frontend
│   ├── public/                 # statische Dateien (favicon, index.html)
│   ├── src/                    # React Code
│   │   ├── app/                # main.tsx, App.tsx
│   │   ├── components/         # UI-Komponenten
│   │   ├── pages/              # Seiten (z. B. Home, Features)
│   │   ├── services/           # API-Calls (axios/fetch)
│   │   ├── types/              # TypeScript-Interfaces
│   │   └── styles/             # globale Styles
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── README.md
└── .gitignore

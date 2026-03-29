# Technologie-Übersicht nach Schichten

> Stand: Analyse der vorhandenen Projektdateien (Frontend, Backend, DB, Build/Run-Konfiguration).

## 1) Frontend

| Bereich | Verwendete Technologie / Umsetzung | Quelle im Projekt |
|---|---|---|
| Grundtechnologie | Klassisches **HTML5** + **CSS** + **Vanilla JavaScript** (kein React/Vue/Angular) | `frontend/index.html`, `frontend/styles_main.css`, `frontend/scripts/main.js` |
| Ausführung/Hosting lokal | Statischer Server über **Python 3 http.server** auf Port **4173** | `frontend/package.json`, `Abgabe/package.json` |
| API-Kommunikation | Browser-**Fetch API** für REST-Requests | `frontend/scripts/main.js` |
| API-Auth im Frontend | Übergabe über HTTP-Header **x-api-key** bei geschützten Requests | `frontend/scripts/main.js` |
| Datenhaltung im Frontend | In-Memory Arrays (`currencies`, `rates`, `transactions`) + Fallback-Seeddaten in JS | `frontend/scripts/main.js` |
| Rendering | DOM-Manipulation über `innerHTML`, Formular- und Tabellenrendering manuell | `frontend/scripts/main.js` |
| Build-System | **Kein** Bundler/Transpiler (kein Vite/Webpack/Babel konfiguriert) | `frontend/package.json` |

## 2) Backend

| Bereich | Verwendete Technologie / Umsetzung | Quelle im Projekt |
|---|---|---|
| Runtime | **Node.js** (CommonJS-Modulformat) | `backend/package.json` |
| Node-Version | **Nicht fest pinnt** (`engines` fehlt, keine `.nvmrc` im Abgabe-Ordner) | `backend/package.json` |
| Framework | **Express 4** REST-API | `backend/package.json`, `backend/src/server.js` |
| CORS | Paket **cors** mit konfigurierbarer Origin über `ALLOWED_ORIGIN` | `backend/package.json`, `backend/src/server.js`, `backend/.env.example` |
| DB-Treiber | **mysql2** (Promise API) + Connection Pool | `backend/package.json`, `backend/src/db.js` |
| API-Sicherheit | API-Key-Schutz für schreibende Endpunkte (`requireApiKey`) via Header `x-api-key` | `backend/src/server.js` |
| Konfiguration | **.env-basiert** (per `.env.example`, lokal nach `.env` kopieren) | `README.md`, `backend/README.md`, `backend/.env.example` |
| Logging | Dateibasiertes Logging mit Node-`fs`: `requests.log` + `errors.log` in `LOG_DIR` | `backend/src/server.js`, `backend/README.md`, `backend/.env.example` |
| Input-Validierung | Manuelle Validierung im Code (z. B. positive Zahlen, Pflichtfelder, Status-Whitelist) | `backend/src/server.js` |
| Skripte/Start | `npm start` startet `node src/server.js` | `backend/package.json` |

## 3) Datenbank

| Bereich | Verwendete Technologie / Umsetzung | Quelle im Projekt |
|---|---|---|
| DBMS | **MySQL** | `README.md`, `backend/README.md` |
| Initialisierung | SQL-Skript `sql/init.sql` (Schema + Seeddaten) | `backend/sql/init.sql` |
| Schema | Tabellen: `currency`, `rate`, `user`, `transaction` | `backend/sql/init.sql` |
| Beziehungen | **Foreign Keys** zwischen Kursen/Transaktionen und Referenztabellen | `backend/sql/init.sql` |
| Datentypen | u. a. `DECIMAL(18,8)`, `DECIMAL(18,2)`, `DATETIME`, `ENUM` für Status | `backend/sql/init.sql` |
| Basisdaten | Seed-Records für Währungen, Wechselkurse, User, Transaktionen | `backend/sql/init.sql` |

## 4) Querschnitt / Betrieb / Sonstiges

| Bereich | Verwendete Technologie / Umsetzung | Quelle im Projekt |
|---|---|---|
| Projektstruktur | Monorepo-artig mit Root-Skripten + getrennten Ordnern `frontend/` und `backend/` | `Abgabe/package.json`, `Abgabe/README.md` |
| Paketmanager | **npm** (`package-lock.json` vorhanden) | `backend/package-lock.json` |
| API-Healthcheck | `/api/health` und `/api/status` inkl. DB-Check (`SELECT 1`) | `backend/src/server.js`, `Abgabe/README.md` |
| Fehlerverhalten ohne API_KEY | Schreibende Endpunkte liefern **HTTP 503** wenn Server nicht korrekt konfiguriert ist | `Abgabe/README.md`, `backend/src/server.js`, `backend/README.md` |

## Kurzfazit

- Stack ist bewusst **einfach und lehrorientiert**: Vanilla Frontend + Express + MySQL.
- Konfiguration und Betrieb sind lokal unkompliziert (npm + Python-Static-Server + SQL-Initskript).
- Logging, API-Key-Schutz und CORS sind vorhanden, aber keine erweiterten Produktionsfeatures (z. B. JWT, strukturierte Logger, Migrations-Tool, automatisierte Tests).

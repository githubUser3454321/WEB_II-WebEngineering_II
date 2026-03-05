# System Übersicht

_Stand: 2026-03-05_

## Ziel
Kurze, professionelle Übersicht der 3-Tier-Architektur für Sprint 5–7.

## Architekturdiagramm
```mermaid
flowchart LR
    U[Benutzer\nBrowser] --> FE[Frontend\nPresentation Tier\n(Azure oder lokal)]
    FE -->|HTTPS 443 / API Calls| RP[Reverse Proxy / API Gateway\nEdge Tier]
    RP -->|Intern 3000| BE[Backend API\nBusiness Tier\n(Ubuntu VM)]
    BE -->|SQL 3306 intern| DB[(Datenbank\nPersistence Tier\n(Local/VM))]
    BE --> LOG[(Request-/Error-Logs)]

    classDef public fill:#e8f5ff,stroke:#2a5d9f,stroke-width:1px;
    classDef internal fill:#f3f8e8,stroke:#5f7a1f,stroke-width:1px;
    classDef secure fill:#fff0f0,stroke:#a33,stroke-width:1px;

    class U,FE,RP public;
    class BE,LOG internal;
    class DB secure;
```

## Schnittstellenübersicht
| Layer | Aufgabe | Technologievorschlag |
|---|---|---|
| Frontend | Anzeige, Eingaben, API-Aufrufe | HTML/JS oder React |
| Backend | Business-Logik, Auth, Logging | Node.js + Express |
| Datenbank | Persistenz, Relationen, Constraints | MySQL/PostgreSQL |

## Platzierung der Umgebungen (Architektur-Wahl)
| Ebene | Sprint 5–7 (verbindlich) | Option nach Sprint 7 |
|---|---|---|
| Frontend | Azure (öffentlich, 443) | Azure |
| Reverse Proxy / Gateway | Edge/Public 443 | Edge/Public 443 |
| Backend | Ubuntu-VM (VMware, intern 3000) | Azure VM/App Service (intern hinter Gateway) |
| Datenbank | lokal/LAN, nur intern erreichbar | lokal/LAN oder private Managed-DB |

Hinweis: Für die aktuelle Abgabe bleibt das Backend auf Ubuntu-VM; ein Umzug nach Azure ist eine spätere Betriebsoption.

## Endpunkt-Mindestumfang
- `GET /api/<resource>`
- `GET /api/<resource>/:id`
- `POST /api/<resource>`
- `PUT /api/<resource>/:id`
- `DELETE /api/<resource>/:id`
- `POST /api/<resource>/:id/status` (Spezialfall)

## Sicherheits-Check
- [ ] DB ist nicht öffentlich exponiert
- [ ] DB nur vom Backend erreichbar
- [ ] Backend-Port `3000` ist nicht öffentlich exponiert
- [ ] Secrets nicht im Git; produktiv über Secret-Store/Runtime-Variablen
- [ ] Authentifizierung über Token oder API-Key aktiv

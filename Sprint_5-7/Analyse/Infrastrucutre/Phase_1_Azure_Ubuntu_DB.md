# Phase 1 – Infrastruktur-Basis (Frontend/Backend/DB getrennt)

## 1) Ziel-Umgebung festlegen

- **Frontend-Host**: URL und Deployment-Methode festlegen.
- **Backend-Host**: Public IP/FQDN + offener API-Port (z. B. 3000) festlegen.
- **DB-Host**: private IP + MySQL-Port 3306 (nur intern).

> Ergebnis: Eine Tabelle mit Hostname, Rolle, IP, Ports, Zugang.

## 2) Datenbank-Host vorbereiten (Plattform C)

1. MySQL/MariaDB installieren.
2. Schema initialisieren mit:
   - `Abgabe/backend/sql/init.sql`
3. Dedizierten DB-User anlegen (nicht root) nur mit benötigten Rechten auf die Projekt-DB.
4. MySQL-Bind-Adresse prüfen:
   - Für Backend-Zugriff aus Netzwerk passend setzen (z. B. private NIC).
5. Sicherstellen, dass lokale Firewall nur Backend-IP auf 3306 zulässt.

## 3) Backend-Host vorbereiten (Plattform B)

1. Node.js (LTS) und npm installieren.
2. Repository deployen/pullen.
3. Im Ordner `Abgabe/backend` Abhängigkeiten installieren:
   - `npm ci` (oder `npm install`)
4. `.env` aus `.env.example` ableiten und produktionsnah befüllen:
   - DB-Host/IP (private Adresse)
   - DB-User/Passwort
   - API-Port
   - `ALLOWED_ORIGIN` (Frontend-URL)
   - API-Key für schreibende Endpunkte
5. API starten (z. B. systemd/pm2) und Autostart aktivieren.
6. Health-Check manuell ausführen:
   - `GET /api/health` (oder kleinster verfügbarer GET-Endpunkt)

## 4) Frontend-Host vorbereiten (Plattform A)

1. Statische Dateien aus `Abgabe/frontend` deployen.
2. Falls Build notwendig ist: Build-Prozess ausführen und Artefakt deployen.
3. Im UI die API-Konfiguration setzen:
   - Base URL = Backend-Live-URL
   - API-Key = gültiger Schlüssel
4. Browser-Test:
   - Lesen (GET) funktioniert.
   - Geschützte Schreib-Operationen funktionieren nur mit gültigem Key.

## 5) Erste End-to-End-Verifikation

1. Im Frontend einen Lese-Use-Case ausführen.
2. Einen Schreib-Use-Case ausführen.
3. Im Backend prüfen:
   - Request-Logs werden geschrieben.
   - Keine unerwarteten Fehler im Error-Log.
4. In der DB prüfen:
   - Änderung ist persistiert.

## Exit-Kriterien Phase 1

- FE/BE/DB laufen auf drei getrennten Plattformen.
- Frontend zeigt auf Live-Backend.
- Backend spricht erfolgreich mit der DB.

# Phase 4 – Abgabe-Artefakte & Runbook (Single Source of Truth)

## 1) Artefakt-Checkliste vervollständigen

Sammelt und versioniert mindestens:

- Architekturübersicht (FE/BE/DB + Verbindungen)
- Startbefehle/Services je Plattform
- Ports/Freigaben/Firewall-Regeln
- `.env`-Variablenübersicht (ohne Secrets)
- API-Testreport (inkl. Negativfall)
- Log-Auszüge (Request + Error)
- Sicherheitsnachweis „DB extern blocked“
- ADR/Entscheidungsnotiz zur Architektur-Wahl (warum FE/BE/DB so platziert sind)
- Screenshots von Deployments/Regeln/Testergebnissen

## 2) Frontend-Inbetriebnahme explizit dokumentieren

Kurzanleitung im Runbook ergänzen:

1. Wo Base URL im Frontend gesetzt wird.
2. Wo API-Key gesetzt wird.
3. Wie man einen geschützten Endpunkt per UI validiert.

## 3) Reproduzierbarkeit sicherstellen

- Reihenfolge der Startschritte (DB → Backend → Frontend).
- Rollback-Hinweise (z. B. letzte funktionierende Config).
- Troubleshooting-Kapitel:
  - CORS-Fehler
  - 401/403 durch fehlenden API-Key
  - DB-Verbindungsfehler

## 4) Finaler Abnahme-Ordner

Empfohlene Struktur:

- `Sprint_5-7/Abgabe/artefakte/screenshots/`
- `Sprint_5-7/Abgabe/artefakte/tests/`
- `Sprint_5-7/Abgabe/artefakte/logs/`
- `Sprint_5-7/Abgabe/artefakte/netzwerk/`

## Exit-Kriterien Phase 4

- Ein vollständiges, nachvollziehbares Runbook liegt vor.
- Externe Prüfer können Deployment, Sicherheit und Tests reproduzieren.

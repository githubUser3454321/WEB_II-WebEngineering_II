# Aktueller Stand

## Done
- Einfache Frontend-Basis für Sprint 01 bis 04 ist vorhanden (`03_Sprint_Umsetzung`), im Stil der Demo-Beispiele.
- Die Kernmuster aus den Demos sind umgesetzt (Variable, Array, Objekt, Schleifen, forEach).
- Sprint-Dokumente 01 bis 04 wurden inhaltlich ausgelesen und die nächsten Schritte priorisiert.
- Sprint 03 Backend ist vorhanden (`backend/` mit Express, MySQL-Schema, REST-Endpunkten).
- **Sprint 02 wurde gestartet und umgesetzt im Frontend**:
  - Frontend lädt Currencies, Rates und Transactions über REST (`/api/*`).
  - Calculator ist eingebaut (Betrag von Quellwährung zu Zielwährung umrechnen).
  - Login-Aufruf gegen Backend ist eingebaut.
  - Transaktionen können aus dem Frontend gesendet werden (`POST /api/transactions`).
  - Falls Backend nicht erreichbar ist, gibt es simple Fallback-Daten für Anzeige.

## Nächstes aus `01_Sprints`
1. **Sprint 03 abschliessen (aktuelle Priorität)**
   - Backend lokal mit echter MySQL-Instanz testen.
   - Endpunkte fachlich mit realen Requests verifizieren.
2. **Sprint 02 sauber abschliessen**
   - Frontend-Flow mit laufendem Backend durchtesten (Login, Calculator, Transactions).
   - Kleinere UX-/Validierungsverbesserungen im gleichen simplen Stil ergänzen.
3. **Sprint 04 danach liefern**
   - Testprotokoll mit mindestens 10 Testfällen erstellen.
   - Installationsanleitung als `README.md` für Gesamtprojekt erstellen.

## ToDo (konkret)
- [ ] Backend lokal mit MySQL vollständig durchtesten (`GET/POST` auf allen Kernrouten).
- [ ] End-to-End-Test Frontend <-> Backend durchführen und Fehler beheben.
- [ ] Testprotokoll und finales README gemäss Sprint 04 vorbereiten.

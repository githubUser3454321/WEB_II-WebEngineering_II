# Aktueller Stand

## Done
- Einfache Frontend-Basis für Sprint 01 bis 04 ist vorhanden (`03_Sprint_Umsetzung`), im Stil der Demo-Beispiele.
- Die Kernmuster aus den Demos sind umgesetzt (Variable, Array, Objekt, Schleifen, forEach).
- Sprint-Dokumente 01 bis 04 wurden inhaltlich ausgelesen und die nächsten Schritte priorisiert.
- **Sprint 03 wurde weiter umgesetzt**:
  - `backend/` mit Express-Server, MySQL-Anbindung und SQL-Init-Skript ist vorhanden.
  - API-Endpunkte wurden erweitert (`POST /api/currencies`, `POST /api/rates`, `POST /api/users`).
  - Einfache Request-Validierungen und 404-Handling wurden ergänzt.

## Nächstes aus `01_Sprints`
1. **Sprint 03 abschliessen (aktuelle Priorität)**
   - Backend lokal mit echter MySQL-Instanz testen.
   - Endpunkte fachlich mit realen Requests verifizieren.
2. **Sprint 02 danach vervollständigen**
   - Frontend an REST-Service anbinden (Currencies, Rates, Calculator, Transactions).
   - Währungstransaktionen vom Frontend an Backend senden und wieder anzeigen.
   - Einfache Benutzerverwaltung/Login im Frontend ergänzen.
3. **Sprint 04 zum Schluss liefern**
   - Testprotokoll mit mindestens 10 Testfällen erstellen.
   - Installationsanleitung als `README.md` für Gesamtprojekt erstellen.

## ToDo (konkret)
- [ ] Backend lokal mit MySQL vollständig durchtesten (`GET/POST` auf allen Kernrouten).
- [ ] Frontend in `03_Sprint_Umsetzung` schrittweise auf API umstellen.
- [ ] Testprotokoll und finales README gemäss Sprint 04 vorbereiten.

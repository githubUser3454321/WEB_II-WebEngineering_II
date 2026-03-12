# Abgleich: Infrastruktur-Dokumente vs. Arbeitsauftrag Sprint 05–07

## 1) Ist `Phase_1.4_Betrieb_Checkliste_und_Backup.md` nötig?

Kurzantwort: **Nicht zwingend für die Muss-Kriterien**, aber als Ergänzung sinnvoll.

Begründung:

- Im Arbeitsauftrag werden für die Umsetzung u. a. Plattform-Setup, Netzwerk/Firewall, DB-Deployment, Backend/GUI, Logging, API-Tests und reproduzierbare Deployment-Dokumentation verlangt.
- **Backup/Restore, RPO/RTO und Betriebsalarme** werden dort nicht als explizite Pflichtpunkte genannt.
- In `Phase_1.4_Betrieb_Checkliste_und_Backup.md` ist die Phase selbst als **„optional aber sehr empfohlen“** gekennzeichnet.

## 2) Weitere Punkte in `/Sprint_5-7/Analyse/Infrastrucutre`, die über den Arbeitsauftrag hinausgehen

Die folgenden Inhalte sind hilfreiche Erweiterungen, aber nicht explizit als Muss-Anforderung formuliert:

1. **Quick-Fix-Katalog für den 2. Setup-Durchlauf**
   - `Bekannte_Probleme_und_Quickfixes.md` (Troubleshooting-Sammlung)
2. **Sehr konkrete Betriebs-/Abgabe-Organisationsdetails**
   - z. B. vorgeschlagene Ordnerstruktur für Artefakte, ADR-Hinweis, umfangreiche Screenshot-/Runbook-Checklisten.
3. **Architektur-Vorgaben, die strenger/spezifischer als der Auftrag sind**
   - z. B. öffentliche Exposition nur über 443 + S2S-VPN-Variante als konkrete Zielausprägung.

## 3) Empfehlung für die Abgabe

- **Muss**: Alles sauber abdecken, was in Arbeitsauftrag 1 und 2 explizit gefordert ist.
- **Kann**: Phase 1.4 + Quick-Fixes als „Mehrwert“ beibehalten (hilft bei Stabilität, Wiederholbarkeit und Verteidigung in der Abnahme).
- In der finalen Doku klar trennen zwischen:
  - **Pflicht (gemäss Auftrag)**
  - **Erweiterung/Best Practice (zusätzlich umgesetzt)**

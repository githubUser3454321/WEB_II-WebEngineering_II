# TODO – Dokumentation Sprint 5–7 (Abgabe-Fahrplan)

Dieses TODO basiert auf:
- `Sprint_5-7/Abgabe/Bewertungsraster Lernfeld Webenineering II.xlsx`
- `Sprint_5-7/Abgabe/Abgabe_Dokument.docx`

## 0) Zielbild (kurz)
- Die **Infrastruktur ist technisch fertig**.
- Fokus: **Dokumentation fertigstellen**, Nachweise einfügen, formale Abgabequalität erreichen.
- Priorität: Punkte aus dem Bewertungsraster systematisch absichern.

---

## 1) Blocker zuerst (muss vor Feinschliff erledigt sein)

- [ ] **Live-Nachweise final erzeugen und ablegen**
  - [ ] FE → BE zeigt nachweisbar auf Live-Backend.
  - [ ] Externer Zugriff auf DB-Port `3306` schlägt fehl (Security-Nachweis).
  - [ ] Interner Backend→DB-Zugriff funktioniert.
  - [ ] API-Smoke-Tests gegen Live-URL laufen erfolgreich (inkl. Negativfall + Domainregel).
  - [ ] Request- und Error-Logs als Evidenz exportieren.

**Ablageordner (empfohlen):**
- [ ] `Sprint_5-7/Abgabe/artefakte/tests/`
- [ ] `Sprint_5-7/Abgabe/artefakte/logs/`
- [ ] `Sprint_5-7/Abgabe/artefakte/firewall/`
- [ ] `Sprint_5-7/Abgabe/artefakte/screenshots/`

---

## 2) Dokument `Abgabe_Dokument.docx` fertigschreiben (inhaltlich)

### 2.1 Platzhalter ersetzen
- [ ] Alle Platzhalter wie `<Screenshot ...>` entfernen und durch echte Inhalte ersetzen.
- [ ] Abbildungsbeschriftungen vereinheitlichen (keine Fragmente wie „Abbildung 2 von .env.example“).
- [ ] Kapitel 5 Risikotabelle sprachlich und formal bereinigen (Tippfehler/Begriffe korrigieren).

### 2.2 Pflichtinhalte aus Bewertungsraster absichern

#### Arbeitsauftrag 1 – Konzept/Architektur
- [ ] Ausgangslage: aktuell, problembezogen, Rahmenbedingungen klar.
- [ ] Lösungsansatz: Varianten, Vor-/Nachteile, Risiken, Begründung.
- [ ] Grobarchitektur: 3 Plattformen sichtbar, Netzwerkplan + pfSense, Schnittstellen.
- [ ] Sicherheitskonzept: DB-Isolation, Zugriffsgrenzen, Secrets-Handling.
- [ ] Risikoanalyse/Testkonzept: Eintritt/Auswirkung, Massnahmen, testbare Abnahmekriterien.

#### Arbeitsauftrag 2 – Praktische Umsetzung (Dokumentationssicht)
- [ ] Plattformverteilung & Deployment reproduzierbar dokumentiert.
- [ ] Datenbank-Nachweis: Tabellen, FK, Seed-Daten, Isolation.
- [ ] REST/API-Nachweis: 5+ Endpunkte, CRUD, Spezialfall, Fehlerbehandlung, Logging.
- [ ] GUI-Nachweis: Struktur, API-Integration, Formulare/Validierung, responsives Layout.
- [ ] Logging-Nachweis: Request/Error, Zeitstempel, Speicherort.
- [ ] Automatisierte Tests: min. 5, inkl. Negativtest, Ergebnisse dokumentiert.

---

## 3) Formale Qualität (15%-Block) – abschliessende Checkliste

### Vorspann
- [ ] Titelblatt entspricht Vorgabe.
- [ ] Inhaltsverzeichnis korrekt und aktuell.

### Hauptteil
- [ ] Kapitelreihenfolge logisch.
- [ ] Keine Redundanzen, keine inhaltlichen Lücken.
- [ ] Dritte Person kann mit der Doku nachbauen.

### Schlussteil
- [ ] Zusammenfassung + Schlussfolgerung.
- [ ] Persönliche Reflexion vollständig (Lerngewinn, gelungen/weniger gelungen, Herausforderung, Lösung).

### Ergänzungsteil
- [ ] Selbständigkeitserklärung mit Datum/Unterschrift.
- [ ] Tabellen-/Abbildungsverzeichnis vollständig.
- [ ] Quellenverzeichnis formal korrekt und vollständig.

### Gestaltung/Sprache
- [ ] Einheitliches Layout, gute Lesbarkeit, saubere Grafiken.
- [ ] Fachsprache präzise, sachlich, ohne Umgangssprache.
- [ ] Rechtschreibung/Grammatik Endkorrektur.

---

## 4) Empfohlene Arbeitsreihenfolge (Schritt für Schritt)

1. [ ] **Artefakte erzeugen** (Tests, Logs, Firewall, Screenshots).
2. [ ] **Kapitel 4–6 finalisieren** (Architektur, Risiken, Test/Abnahme mit echten Nachweisen).
3. [ ] **Kapitel 1–3 schärfen** (Problem, Varianten, Entscheidbegründung konsistent).
4. [ ] **Anhänge strukturieren** (A1–A5 mit klaren Dateinamen und Verweisen).
5. [ ] **Vorspann/Schlussteil/Ergänzungsteil finalisieren**.
6. [ ] **Sprach- und Format-Review** (ein Durchgang nur Sprache, ein Durchgang nur Form).
7. [ ] **Finale Abgabeprüfung gegen Bewertungsraster** (jede Zeile im Raster mit Evidenz markieren).

---

## 5) Definition of Done (Abgabe-ready)

- [ ] Alle Raster-Kriterien haben sichtbare Evidenz im Dokument oder Anhang.
- [ ] Keine Platzhalter mehr im Dokument.
- [ ] Alle Nachweise sind im Abgabeordner abgelegt und referenziert.
- [ ] Dokument ist formal vollständig (inkl. Verzeichnisse + Erklärung).
- [ ] Teaminterner Schlusscheck durchgeführt (4-Augen-Prinzip).

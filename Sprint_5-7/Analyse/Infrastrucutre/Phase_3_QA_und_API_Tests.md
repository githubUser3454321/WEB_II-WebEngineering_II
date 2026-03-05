# Phase 3 – QA & API-Tests gegen produktionsnahe Umgebung

## 1) Ziel und Scope

Tests **nicht lokal**, sondern gegen die echten Ziel-Endpoints fahren.
Mindestens 5 Testfälle inkl. Negativfall.

## 2) Testvorbereitung

1. Endpunkte + Testdaten festlegen.
2. API-Key für geschützte Endpunkte hinterlegen.
3. Testskript in `Sprint_5-7/Abgabe/tests/api_smoke_tests.py` auf Live-Base-URL konfigurieren
   (über Env-Variable bevorzugt).

## 3) Testfälle (Minimalset)

1. **GET-Liste** liefert 200.
2. **GET by ID** liefert 200 für existierenden Datensatz.
3. **POST mit gültigem API-Key** liefert 201/200.
4. **POST/PUT ohne oder mit falschem API-Key** liefert 401/403 (Negativfall).
5. **Domainregel**: Statuswechsel von `cancelled` auf anderen Status wird abgewiesen.

## 4) Testdurchlauf und Reporting

1. Tests ausführen und Ausgabe speichern (Datei + Konsole).
2. Fehlgeschlagene Tests mit Ursache annotieren.
3. Bei Erfolg Testreport als Abgabe-Artefakt ablegen (z. B. unter `Sprint_5-7/Abgabe/artefakte/tests/`).

## 5) Log-Korrelation

- Für mindestens einen Testfall nachweisen:
  - Request im Request-Log vorhanden.
  - Fehlerfall im Error-Log vorhanden (falls Negativtest).

## Exit-Kriterien Phase 3

- API-Tests laufen gegen Live-Zielsystem.
- Report + Log-Korrelation sind archiviert.

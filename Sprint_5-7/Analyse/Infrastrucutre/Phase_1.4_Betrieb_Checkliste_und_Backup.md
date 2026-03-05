# Phase 1.4 – Betrieb, Backup und Wiederanlauf (optional aber sehr empfohlen)

> Diese Phase macht aus einem „funktioniert gerade so“-Setup ein Setup, das im Fehlerfall schnell wiederhergestellt werden kann.

## 1) Backup-Strategie festlegen

Mindestens täglich:

- MySQL-Dump (`mysqldump`) der Projekt-DB.
- Sicherung der `.env` (verschlüsselt/geschützt speichern).
- Sicherung von wichtigen Konfigurationsdateien (Nginx/systemd/pfSense-Export).

Zusätzlich verbindlich definieren:

- **RPO (Recovery Point Objective)**, z. B. maximal 24h Datenverlust.
- **RTO (Recovery Time Objective)**, z. B. Service innerhalb 2h wieder online.

## 2) Automatisches DB-Backup (Beispiel Ubuntu-Client)

```bash
mkdir -p /home/admin/backups
mysqldump -h 192.168.10.10 -u webapp_user -p webapp_prod > /home/admin/backups/webapp_prod_$(date +%F).sql
```

Danach per Cron täglich planen.

## 3) Restore-Test (wichtig)

Ein Backup ist nur wertvoll, wenn Restore getestet wurde:

1. Test-DB anlegen.
2. Dump importieren.
3. Stichproben auf Tabellen und Daten machen.
4. Ergebnis mit Zeitstempel im Runbook dokumentieren (Dauer, Erfolg/Fehler, Lessons Learned).

Empfehlung: Restore-Test mindestens 1x pro Sprint wiederholen.

## 4) Betriebsdoku ergänzen

Dokumentiere kompakt:

- Wo laufen FE/BE/DB genau?
- Welche Passwörter/Keys liegen in welchem Secret-Speicher?
- Welche Firewall-Regeln sind kritisch?
- Wie startet man Backend/DB nach Neustart?
- Welche Alarme sind aktiv (API-Health, CPU/RAM, Disk, Zertifikatsablauf)?

## Exit-Kriterien Phase 1.4

- Backup läuft automatisiert.
- Restore ist einmal erfolgreich getestet.
- Betriebsschritte sind so dokumentiert, dass auch eine zweite Person übernehmen kann.

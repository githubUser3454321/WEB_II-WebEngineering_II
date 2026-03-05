# Phase 2 – Netzwerk & Security (pfSense/Firewall)

## 1) Sicherheitsziel definieren

- Datenbank-Port `3306` darf **nicht** aus dem Internet erreichbar sein.
- Zugriff auf DB nur von Backend-IP/Subnetz erlaubt.
- Backend-API nur auf benötigten Port(s) öffentlich.

## 2) pfSense-/Firewall-Regeln setzen

1. WAN-Regeln prüfen:
   - Kein Port-Forward auf DB-Port.
2. LAN/DMZ-Regeln definieren:
   - `ALLOW Backend_IP -> DB_IP:3306`
   - `DENY any -> DB_IP:3306`
3. Optional: Geo/IP-Restriktionen oder Rate-Limits für API-Port setzen.
4. Logging für relevante Deny-Regeln aktivieren.

## 3) Nachweis „DB extern blocked“ durchführen

Von **externem Netz** testen (nicht aus Backend-Subnetz):

- `nc -vz <DB_PUBLIC_OR_EDGE_IP> 3306`
- alternativ `nmap -p 3306 <ziel>`

Erwartung:
- Verbindung schlägt fehl / Port filtered/closed.

Vom Backend-Host testen:
- DB-Verbindung erfolgreich (z. B. via API-Start oder DB-Client).

## 4) Evidenz sichern

- Screenshot/Export der pfSense-Regeln.
- Terminal-Ausgabe externer Block-Test.
- Terminal-Ausgabe erfolgreicher Backend→DB-Verbindung.
- Timestamp + Quelle der Tests dokumentieren.

## Exit-Kriterien Phase 2

- Technisch und dokumentarisch gezeigt: DB extern nicht erreichbar.
- Backend-Zugriff auf DB funktioniert weiterhin stabil.

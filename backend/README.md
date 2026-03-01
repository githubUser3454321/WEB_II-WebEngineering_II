# GTC Backend (Sprint 03 Start)

Einfaches Backend-Grundgerüst gemäss Sprint 03:
- Node.js + Express.js
- MySQL
- REST-API für currencies, rates, transactions, users/login

## Start

```bash
cd backend
npm install
npm start
```

## Umgebungsvariablen (optional)

- `PORT` (default: `3000`)
- `DB_HOST` (default: `127.0.0.1`)
- `DB_PORT` (default: `3306`)
- `DB_USER` (default: `root`)
- `DB_PASSWORD` (default: leer)
- `DB_NAME` (default: `gtc`)

## Datenbank initialisieren

SQL-Datei ausführen:

```bash
mysql -u root -p < sql/init.sql
```

## Endpunkte

- `GET /api/health`
- `GET /api/currencies`
- `GET /api/rates`
- `GET /api/transactions`
- `POST /api/transactions`
- `GET /api/users`
- `POST /api/login`

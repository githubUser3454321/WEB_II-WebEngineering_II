"use strict";

const express = require("express");
const cors = require("cors");
const { pool } = require("./db");

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

app.get("/api/health", async (req, res) => {
    try {
        await pool.query("SELECT 1");
        res.json({ status: "ok", db: "connected" });
    } catch (error) {
        res.status(500).json({ status: "error", db: "not connected", message: error.message });
    }
});

app.get("/api/currencies", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT id, iso_code, name, countries FROM currency ORDER BY iso_code ASC");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/api/rates", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT id, base_currency, target_currency, rate_value, rate_date FROM rate ORDER BY rate_date DESC, id DESC"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/api/transactions", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT id, transaction_date, user_login, source_amount, source_currency, target_currency, exchange_rate FROM transaction ORDER BY transaction_date DESC, id DESC"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/api/transactions", async (req, res) => {
    const {
        transaction_date,
        user_login,
        source_amount,
        source_currency,
        target_currency,
        exchange_rate
    } = req.body;

    if (!transaction_date || !user_login || !source_currency || !target_currency) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    try {
        const [result] = await pool.query(
            `INSERT INTO transaction
            (transaction_date, user_login, source_amount, source_currency, target_currency, exchange_rate)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [transaction_date, user_login, source_amount, source_currency, target_currency, exchange_rate]
        );

        res.status(201).json({ id: result.insertId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/api/users", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT id, first_name, last_name, login FROM user ORDER BY id ASC");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/api/login", async (req, res) => {
    const { login, password } = req.body;

    if (!login || !password) {
        return res.status(400).json({ message: "Missing login or password." });
    }

    try {
        const [rows] = await pool.query("SELECT id, first_name, last_name, login FROM user WHERE login = ? AND password = ?", [
            login,
            password
        ]);

        if (rows.length === 0) {
            return res.status(401).json({ message: "Invalid login." });
        }

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`GTC backend running on port ${PORT}`);
});

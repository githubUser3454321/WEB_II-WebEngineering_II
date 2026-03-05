"use strict";

let apiBase = "http://127.0.0.1:3000/api";
let apiKey = "";

let currencies = [];
let rates = [];
let transactions = [];

let fallbackCurrencies = [
    { "id": 1, "iso_code": "CHF", "name": "Swiss Franc", "countries": "Switzerland, Liechtenstein" },
    { "id": 2, "iso_code": "EUR", "name": "Euro", "countries": "Austria, Belgium, France, Germany, Italy, Spain, Vatican City" },
    { "id": 3, "iso_code": "USD", "name": "United States Dollar", "countries": "United States" },
    { "id": 4, "iso_code": "GBP", "name": "Pound Sterling", "countries": "United Kingdom" }
];

let fallbackRates = [
    { "id": 1, "base_currency": "CHF", "target_currency": "EUR", "rate_value": 1.03, "rate_date": "2026-02-01 10:00:00" },
    { "id": 2, "base_currency": "CHF", "target_currency": "USD", "rate_value": 1.12, "rate_date": "2026-02-01 10:00:00" },
    { "id": 3, "base_currency": "EUR", "target_currency": "CHF", "rate_value": 0.97, "rate_date": "2026-02-01 10:00:00" }
];

function getApiHeaders(auth = false) {
    const headers = { "Content-Type": "application/json" };
    if (auth && apiKey) {
        headers["x-api-key"] = apiKey;
    }
    return headers;
}

function extractErrorMessage(payload, fallbackMessage) {
    if (payload && typeof payload.message === "string") {
        return payload.message;
    }
    return fallbackMessage;
}

async function apiRequest(path, options = {}) {
    const response = await fetch(`${apiBase}${path}`, options);
    const text = await response.text();
    const payload = text ? JSON.parse(text) : null;
    return { response, payload };
}

function applyApiConfig() {
    const baseInput = document.getElementById("apiBaseInput");
    const apiKeyInput = document.getElementById("apiKeyInput");

    apiBase = baseInput.value.trim().replace(/\/$/, "") || "http://127.0.0.1:3000/api";
    apiKey = apiKeyInput.value.trim();

    document.getElementById("statusOutput").innerHTML = "<p>API-Konfiguration übernommen. Daten werden neu geladen ...</p>";
    reloadAll();
}

async function reloadAll() {
    await loadCurrencies();
    await loadRates();
    await loadTransactions();

    renderCurrencies();
    renderRates();
    renderTransactions();
    renderCurrencySelects();
}

async function init() {
    document.getElementById("apiBaseInput").value = apiBase;
    document.getElementById("apiKeyInput").value = apiKey;

    await reloadAll();

    document.getElementById("calculatorOutput").innerHTML = "<p>Noch keine Berechnung.</p>";
    document.getElementById("loginOutput").innerHTML = "<p>Noch kein Login.</p>";
    document.getElementById("transactionFormOutput").innerHTML = "<p>Noch keine neue Transaktion gespeichert.</p>";
}

async function loadCurrencies() {
    try {
        const { response, payload } = await apiRequest("/currencies");
        if (!response.ok) {
            throw new Error("Could not load currencies.");
        }

        currencies = payload;
        document.getElementById("statusOutput").innerHTML = "<p>Backend verbunden: Currencies geladen.</p>";
    } catch (error) {
        currencies = fallbackCurrencies;
        document.getElementById("statusOutput").innerHTML = "<p>Backend oder Datenbank nicht erreichbar. Fallback-Daten für Currencies aktiv.</p>";
    }
}

async function loadRates() {
    try {
        const { response, payload } = await apiRequest("/rates");
        if (!response.ok) {
            throw new Error("Could not load rates.");
        }

        rates = payload;
    } catch (error) {
        rates = fallbackRates;
    }
}

async function loadTransactions() {
    try {
        const { response, payload } = await apiRequest("/transactions");
        if (!response.ok) {
            throw new Error("Could not load transactions.");
        }

        transactions = payload;
    } catch (error) {
        transactions = [];
    }
}

function renderCurrencies() {
    let output = "";
    output += "<table border='1' cellpadding='4'>";
    output += "<tr><th>ID</th><th>ISO</th><th>Name</th><th>Countries</th></tr>";

    currencies.forEach(currency => {
        output += `<tr><td>${currency.id}</td><td>${currency.iso_code}</td><td>${currency.name}</td><td>${currency.countries}</td></tr>`;
    });

    output += "</table>";
    document.getElementById("currenciesOutput").innerHTML = output;
}

function renderRates() {
    let output = "";
    output += "<table border='1' cellpadding='4'>";
    output += "<tr><th>ID</th><th>From</th><th>To</th><th>Rate</th><th>Date</th></tr>";

    rates.forEach(rate => {
        output += `<tr><td>${rate.id}</td><td>${rate.base_currency}</td><td>${rate.target_currency}</td><td>${rate.rate_value}</td><td>${rate.rate_date}</td></tr>`;
    });

    output += "</table>";
    document.getElementById("ratesOutput").innerHTML = output;
}

function renderTransactions() {
    let output = "";
    output += "<table border='1' cellpadding='4'>";
    output += "<tr><th>ID</th><th>Date</th><th>User</th><th>Amount</th><th>From</th><th>To</th><th>Rate</th><th>Status</th><th>Aktionen</th></tr>";

    transactions.forEach(transaction => {
        output += `<tr>
            <td>${transaction.id}</td>
            <td>${transaction.transaction_date}</td>
            <td>${transaction.user_login}</td>
            <td><input id='editAmount-${transaction.id}' type='number' step='0.01' value='${transaction.source_amount}'></td>
            <td>${transaction.source_currency}</td>
            <td>${transaction.target_currency}</td>
            <td><input id='editRate-${transaction.id}' type='number' step='0.0001' value='${transaction.exchange_rate}'></td>
            <td>${transaction.status || "pending"}</td>
            <td>
                <button onclick='updateTransaction(${transaction.id});'>Update</button>
                <button onclick='setTransactionStatus(${transaction.id}, "approved");'>Approve</button>
                <button onclick='setTransactionStatus(${transaction.id}, "cancelled");'>Cancel</button>
                <button onclick='deleteTransaction(${transaction.id});'>Delete</button>
            </td>
        </tr>`;
    });

    output += "</table>";
    document.getElementById("transactionsOutput").innerHTML = output;
}

function renderCurrencySelects() {
    let options = "";
    currencies.forEach(currency => {
        options += `<option value='${currency.iso_code}'>${currency.iso_code}</option>`;
    });

    document.getElementById("sourceCurrency").innerHTML = options;
    document.getElementById("targetCurrency").innerHTML = options;
    document.getElementById("transactionSourceCurrency").innerHTML = options;
    document.getElementById("transactionTargetCurrency").innerHTML = options;

    document.getElementById("sourceCurrency").value = "CHF";
    document.getElementById("targetCurrency").value = "EUR";
    document.getElementById("transactionSourceCurrency").value = "CHF";
    document.getElementById("transactionTargetCurrency").value = "EUR";
}

function calculateAmount() {
    let sourceAmount = Number(document.getElementById("sourceAmount").value);
    let sourceCurrency = document.getElementById("sourceCurrency").value;
    let targetCurrency = document.getElementById("targetCurrency").value;

    let foundRate = rates.find(rate => rate.base_currency === sourceCurrency && rate.target_currency === targetCurrency);

    if (!foundRate) {
        document.getElementById("calculatorOutput").innerHTML = "<p>Kein passender Kurs gefunden.</p>";
        return;
    }

    let targetAmount = sourceAmount * Number(foundRate.rate_value);
    document.getElementById("calculatorOutput").innerHTML = `<p>${sourceAmount} ${sourceCurrency} = ${targetAmount.toFixed(2)} ${targetCurrency}</p>`;
}

async function doLogin() {
    let login = document.getElementById("loginName").value;
    let password = document.getElementById("loginPassword").value;

    try {
        const { response, payload } = await apiRequest("/login", {
            method: "POST",
            headers: getApiHeaders(),
            body: JSON.stringify({ login: login, password: password })
        });

        if (!response.ok) {
            throw new Error(extractErrorMessage(payload, "Invalid login"));
        }

        document.getElementById("loginOutput").innerHTML = `<p>Login ok: ${payload.first_name} ${payload.last_name} (${payload.login})</p>`;
    } catch (error) {
        document.getElementById("loginOutput").innerHTML = `<p>Login fehlgeschlagen: ${error.message}</p>`;
    }
}

async function createTransaction() {
    let now = new Date();
    let transactionData = {
        transaction_date: now.toISOString().slice(0, 19).replace("T", " "),
        user_login: document.getElementById("transactionUser").value,
        source_amount: Number(document.getElementById("transactionAmount").value),
        source_currency: document.getElementById("transactionSourceCurrency").value,
        target_currency: document.getElementById("transactionTargetCurrency").value,
        exchange_rate: Number(document.getElementById("transactionRate").value)
    };

    try {
        const { response, payload } = await apiRequest("/transactions", {
            method: "POST",
            headers: getApiHeaders(true),
            body: JSON.stringify(transactionData)
        });

        if (!response.ok) {
            throw new Error(extractErrorMessage(payload, "Could not save transaction."));
        }

        document.getElementById("transactionFormOutput").innerHTML = `<p>Transaktion gespeichert (ID ${payload.id}).</p>`;
        await loadTransactions();
        renderTransactions();
    } catch (error) {
        document.getElementById("transactionFormOutput").innerHTML = `<p>Speichern fehlgeschlagen: ${error.message}</p>`;
    }
}

async function updateTransaction(id) {
    const source_amount = Number(document.getElementById(`editAmount-${id}`).value);
    const exchange_rate = Number(document.getElementById(`editRate-${id}`).value);

    try {
        const { response, payload } = await apiRequest(`/transactions/${id}`, {
            method: "PUT",
            headers: getApiHeaders(true),
            body: JSON.stringify({ source_amount, exchange_rate })
        });

        if (!response.ok) {
            throw new Error(extractErrorMessage(payload, "Could not update transaction."));
        }

        document.getElementById("transactionFormOutput").innerHTML = `<p>Transaktion ${id} aktualisiert.</p>`;
        await loadTransactions();
        renderTransactions();
    } catch (error) {
        document.getElementById("transactionFormOutput").innerHTML = `<p>Update fehlgeschlagen: ${error.message}</p>`;
    }
}

async function setTransactionStatus(id, status) {
    try {
        const { response, payload } = await apiRequest(`/transactions/${id}/status`, {
            method: "POST",
            headers: getApiHeaders(true),
            body: JSON.stringify({ status })
        });

        if (!response.ok) {
            throw new Error(extractErrorMessage(payload, "Could not change status."));
        }

        document.getElementById("transactionFormOutput").innerHTML = `<p>Status geändert: ${payload.old_status} → ${payload.new_status} (ID ${payload.id}).</p>`;
        await loadTransactions();
        renderTransactions();
    } catch (error) {
        document.getElementById("transactionFormOutput").innerHTML = `<p>Statuswechsel fehlgeschlagen: ${error.message}</p>`;
    }
}

async function deleteTransaction(id) {
    try {
        const { response, payload } = await apiRequest(`/transactions/${id}`, {
            method: "DELETE",
            headers: getApiHeaders(true)
        });

        if (!response.ok) {
            throw new Error(extractErrorMessage(payload, "Could not delete transaction."));
        }

        document.getElementById("transactionFormOutput").innerHTML = `<p>Transaktion ${id} gelöscht.</p>`;
        await loadTransactions();
        renderTransactions();
    } catch (error) {
        document.getElementById("transactionFormOutput").innerHTML = `<p>Löschen fehlgeschlagen: ${error.message}</p>`;
    }
}

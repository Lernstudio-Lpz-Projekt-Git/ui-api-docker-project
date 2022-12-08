"use strict";

const cors = require("cors");
const express = require("express");
const { flaschenpost } = require("flaschenpost");
const http = require("http");

// Instanz des Loggers
const logger = flaschenpost.getLogger();
// Instanz einer Express API
const api = express();
// cors aktivieren damit der Cross-Domain-Zugiff funktioniert
api.use(cors());

// .... express api configurieren
// erstellen einer einfachen Routings ./
api.get("/", (req, res) => {
  res.json({
    title: "Multi Docker-Container Projekt",
    now: Date.now(),
  });
});

const server = http.createServer(api);
const PORT = 3_000;

server.listen(PORT, () => {
  logger.info("Server started", { PORT });
});

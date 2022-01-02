// Setting up express server
const express = require("express");
const planetsRouter = require("./routes/planets/planets.router");

const app = express();

// Express APP MIDDLEWARES
app.use(express.json());
app.use(planetsRouter);

module.exports = app;

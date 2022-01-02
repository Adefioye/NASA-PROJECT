// Setting up express server
const express = require("express");
const planetsRouter = require("./routes/planets/planets.router");
const cors = require("cors");

const app = express();

// Express APP MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(planetsRouter);

module.exports = app;

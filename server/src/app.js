// Setting up express server
const path = require("path");
const express = require("express");
const planetsRouter = require("./routes/planets/planets.router");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Express APP MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));
app.use(express.json());
// To serve image, css, js files in the public folder(Folder housing React app)
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetsRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;

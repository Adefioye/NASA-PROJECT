const app = require("express");
const planetsRouter = app.Router();
const { getAllPlanets } = require("./planets.controller");

planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;

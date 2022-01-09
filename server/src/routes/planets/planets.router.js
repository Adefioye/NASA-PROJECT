const app = require("express");
const planetsRouter = app.Router();
const { httpGetAllPlanets } = require("./planets.controller");

planetsRouter.get("/", httpGetAllPlanets);

module.exports = planetsRouter;

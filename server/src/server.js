const http = require("http");
const app = require("./app"); // Requiring express app
const server = http.createServer(app);
const { loadPlanetsData } = require("./models/planets.model");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://nasa-api-user:6hz7eHGoGVwlepK2@nasa-api-cluster.pefcr.mongodb.net/nasa-api?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const startServer = async () => {
  async function main() {
    await mongoose.connect(MONGO_URL);
  }

  main();
  //   .then(() => console.log("Connected to database..."))
  //   .catch((err) => console.log(err));

  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
};

startServer();

// mongopwd: 6hz7eHGoGVwlepK2

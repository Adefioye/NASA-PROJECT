const API_URL = "http://localhost:8000";

async function httpGetPlanets() {
  // Load planet and return as JSON
  try {
    const response = await fetch(`${API_URL}/planets`);
    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
}

async function httpGetLaunches() {
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };

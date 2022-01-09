const API_URL = "http://localhost:8000";

// Load planet and return as JSON
async function httpGetPlanets() {
  try {
    const response = await fetch(`${API_URL}/planets`);
    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  try {
    const response = await fetch(`${API_URL}/launches`);
    const fetchedResponse = await response.json();
    return fetchedResponse.sort((a, b) => {
      return a.flightNumber - b.flightNumber;
    });
  } catch (err) {
    console.log(err.message);
  }
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };

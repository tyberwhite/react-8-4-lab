// Ensure that all API/fetch calls are made from this module.

// Swapi is a completely open API. No authentication is required to query and get data.
const BASE_URL = "https://swapi.dev/api/";

// Use "fetch()" to make a GET request to the "starships" endpoint.
// "mode: cors" allows for Cross-Origin Resource Sharing.
// "res.json()" is used to parse the JSON data contained in the response.
export async function getAllStarships() {
  const res = await fetch(`${BASE_URL}starships`, { mode: "cors" });
  return await res.json();
}

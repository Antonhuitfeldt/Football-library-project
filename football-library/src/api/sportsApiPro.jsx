//Här gör vi anrop till api:et SportsApiPro
const BASE_URL = "https://v2.football.sportsapipro.com";

export async function searchResults(query) {
  const apiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;

  if (!apiKey) {
    throw new Error("Saknar SportsAPI Pro API-nyckel.");
  }

  const response = await fetch(`${BASE_URL}/api/search?q=${query}`, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error("Kunde inte kontakta SportsAPI Pro.");
  }

  const data = await response.json();

  return data;
}
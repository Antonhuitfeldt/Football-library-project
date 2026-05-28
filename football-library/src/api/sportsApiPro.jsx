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
  console.log(data)

  return data;
}


export async function getTeam(teamId) {
  const apiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;

  const response = await fetch(`${BASE_URL}/api/teams/${teamId}`, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error("Kunde inte hämta laginfo.");
  }

  const data = await response.json();

  return data;
}

export async function getTeamImage(teamId) {
  const apiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;

  const response = await fetch(`${BASE_URL}/api/teams/${teamId}/image`, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error("Kunde inte hämta lagbild.");
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  
  console.log(url);
  return url;
}

export async function getTeamSquad(teamId) {
  const apiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;

  const response = await fetch(`${BASE_URL}/api/teams/${teamId}/players`, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error("Kunde inte hämta laginfo.");
  }

  const data = await response.json();
  console.log(data)
  
  return data;
}

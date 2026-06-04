//GET teams based on search terms from the user.
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

//GET more information about a specific team
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

//GET the image/logo of the team, use the teamID that was a response from the searchResult() call.
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

//GET the teams players, use the teamID that was a response from the searchResult() call.
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



//---------------------------------------------------World cup API calls-----------------------------------------------------------

//GET worldcup info
export async function getWorldCupInfo() {
  const apiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;

  const response = await fetch(`${BASE_URL}/api/world-cup-2026`, {
    headers: { "x-api-key": apiKey },
  });

  if (!response.ok) throw new Error("Kunde inte hämta VM-info.");
  return response.json();
}

//GET groups of the teams in ht 2026 worldcup
export async function getWorldCupGroups() {
  const apiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;

  const response = await fetch(`${BASE_URL}/api/world-cup-2026/groups`, {
    headers: { "x-api-key": apiKey },
  });

  if (!response.ok) throw new Error("Kunde inte hämta grupper.");
  return response.json();
}
//GET teams based on search terms from the user.
const BASE_URL = "https://v2.football.sportsapipro.com";

// Fetch teams/players based on user search input
export const searchResults = async (query) => {
  const apiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;

// Prevent API calls without a valid key
  if (!apiKey) {
    throw new Error("Missing SportsAPI Pro API key.");
  }

// Perform search request
  const response = await fetch(`${BASE_URL}/api/search?q=${query}`, {
    headers: {
      "x-api-key": apiKey,
    },
  });

// Handle API errors
  if (!response.ok) {
     throw new Error("Could not contact SportsAPI Pro.");
  }

// Convert response to JSON
  const data = await response.json();

  return data;
};

//GET more information about a specific team
export const getTeam = async (teamId) => {
  const apiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;

  const response = await fetch(`${BASE_URL}/api/teams/${teamId}`, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error("Could not retrieve team info.");
  }

  const data = await response.json();

  return data;
};

//GET the image/logo of the team, use the teamID that was a response from the searchResult() call.
export const getTeamImage = async (teamId) => {
  const apiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;

  const response = await fetch(`${BASE_URL}/api/teams/${teamId}/image`, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error("Could not retrieve team picture.");
  }

// Convert image blob to a usable URL
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  
  return url;
};

//GET the teams players, use the teamID that was a response from the searchResult() call.
export const getTeamSquad = async (teamId) => {
  const apiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;

  const response = await fetch(`${BASE_URL}/api/teams/${teamId}/players`, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error("Could not retrieve team info.");
  }

  const data = await response.json();
  
  return data;
};

//GET worldcup info
export const getWorldCupInfo = async () => {
  const apiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;

  const response = await fetch(`${BASE_URL}/api/world-cup-2026`, {
    headers: { "x-api-key": apiKey },
  });

  if (!response.ok) throw new Error("Could not retrieve World Cup info.");
  return response.json();
};

//GET groups of the teams in ht 2026 worldcup
export const getWorldCupGroups = async () => {
  const apiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;

  const response = await fetch(`${BASE_URL}/api/world-cup-2026/groups`, {
    headers: { "x-api-key": apiKey },
  });

  if (!response.ok) throw new Error("Could not retrieve groups.");
  return response.json();
};
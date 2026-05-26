//Här gör vi anrop till api:et SportsApiPro
const sportsApiKey = import.meta.env.VITE_SPORTS_API_PRO_KEY;
const BASE_URL = "https://v2.football.sportsapipro.com";

//exempelanrop från dokumentationen
const response = await fetch(
    'https://v2.football.sportsapipro.com/api/teams/42/players',
    { headers: 
        { 'x-api-key': 'VITE_SPORTS_API_PRO_KEY' } 
    }
  );
  const squad = await response.json();
  
return squad;
// Här gör vi anrop till sportsDB API
const dbApiKey = VITE_SPORTS_DB_KEY;
const BASE_URL = "https://www.thesportsdb.com/api/v1/json";

//Exempel anrop
const response = await fetch(
    `${BASE_URL}/${dbApiKey}/searchplayers.php?p=Danny_Welbeck`);

const player = await response.json();

return player
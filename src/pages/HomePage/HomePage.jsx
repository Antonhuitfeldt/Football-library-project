import { useState } from 'react'
import HeroSection from '../../components/HeroSection/HeroSection';
import SearchResults from '../../components/SearchResults/SearchResults';
import PlayerList from '../../components/PlayerList/PlayerList';
import TeamModal from '../../components/Modals/TeamModal';
import PlayerModal from '../../components/Modals/PlayerModal';
import { searchResults, getTeam, getTeamSquad, getTeamImage } from '../../api/sportsApiPro';
import { getCountryFlag } from "../../utils/flagUrl";


/* BasicTeamData
   - Normalizes API search results into a clean, predictable structure
   - Removes noise and ensures all items share the same fields
*/
const BasicTeamData = (results) => {
  const filtered = results.filter(item => item.type === "team" || item.type === "player");

  return filtered.map(item => {
    const entity = item.entity;

    return {
      id: entity.id,
      name: entity.name,
      country: entity.country?.name || "Unknown",
      countryCode: entity.country?.alpha2 || "??",
      type: item.type,
      league: null,
      emblem: null,
      flag: null
    };
  });
};


const HomePage = () => {
  // Search results + team/player details
  const [results, setResults] = useState([]);
  const [teamData, setTeamData] = useState(null);
  const [players, setPlayers] = useState([]);
  const [image, setImage] = useState(null);
  const [playerData, setPlayerData] = useState(null);

  // Error handling for API failures
  const [error, setError] = useState(null);

  // Opens player modal
  const onPlayerClick = (player) => {
    setPlayerData(player);
  };

  /* Search handler
  - Calls SportsAPI search
  - Normalizes data
  - Fetches country flags for each result
  - Handles API errors gracefully
  */
  const onSearchSubmit = async (query) => {
    try {
      setError(null);

      const result = await searchResults(query);
      const cleanData = BasicTeamData(result.data.results);

      // Attach flags to each item
      const resultsWithFlags = cleanData.map((item) => {
        item.flag = item.countryCode !== "??" ? getCountryFlag(item.countryCode) : null;
        return item;
      });

      setResults(resultsWithFlags);

    } catch (err) {
      console.error("API error: ", err);
      setResults([]);
      setError("Could not contact the API, try again later...");
    }
  };

  /* Team click handler
  - Fetches full team info + team image
  - Opens team modal
  */
  const onTeamClick = async (teamId) => {
    const data = await getTeam(teamId);
    const url = await getTeamImage(teamId);
    setTeamData(data);
    setImage(url);
  };

  /* Squad view handler
  - Loads full player list for a team
  - Closes team modal and shows PlayerList instead
  */
  const onShowSquad = async (teamId) => {
    const team = await getTeamSquad(teamId);
    setPlayers(team.data.players);
    setTeamData(null);
  };

  return (
    <>
      {/* Search bar + hero graphics */}
      <HeroSection onSearchSubmit={onSearchSubmit} />

      {/* API error message */}
      {error && <p className="text-danger mt-3">{error}</p>}

      {/* Search results list */}
      <SearchResults results={results} onTeamClick={onTeamClick} />

      <hr />

      {/* Squad list (shown after clicking "Visa spelare") */}
      <PlayerList
        players={players}
        image={image}
        onPlayerClick={onPlayerClick}
      />

      {/* Team details modal */}
      <TeamModal
        teamData={teamData}
        show={teamData !== null}
        onHide={() => setTeamData(null)}
        onShowSquad={onShowSquad}
        image={image}
      />

      {/* Player details modal */}
      <PlayerModal
        playerData={playerData}
        show={playerData !== null}
        onHide={() => setPlayerData(null)}
      />
    </>
  );
};

export default HomePage;

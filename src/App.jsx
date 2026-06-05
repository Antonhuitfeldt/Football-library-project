import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import HeroSection from './components/HeroSection/HeroSection';
import SearchResults from './components/SearchResults/SearchResults';
import { searchResults, getTeam, getTeamSquad, getTeamImage } from './api/sportsApiPro';
import TeamModal from './components/TeamModal/TeamModal';
import FooterSection from "./components/FooterSection/FooterSection";
import PlayerList from './components/PlayerList/PlayerList';
import PlayerModal from './components/PlayerModal/PlayerModal';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorldCupPage from './pages/WorldCupPage/WorldCupPage';

const BasicTeamData =(results) => {
  
  const filtered = results.filter(item => item.type === "team" || item.type === "player");

  const cleanList = filtered.map(item => {
    const entity = item.entity;

    return {
      id: entity.id,
      name: entity.name,
      country: entity.country?.name || "Unknown",
      countryCode: entity.country?.alpha2 || "??",
      type: item.type,
      league: null,
      emblem: null
    };
  });

  return cleanList;
};


const App =() => {

  const [results, setResults] = useState([]);
  const [teamData, setTeamData] = useState(null);
  const [players, setPlayers] = useState([]);
  const [image, setImage] = useState(null);
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState(null);

  const onPlayerClick = (player) => {
    setPlayerData(player);
  }

  const onSearchSubmit = async (query) => {
    try {
      setError(null);

      const result = await searchResults(query);

      const cleanData = BasicTeamData(result.data.results);
      setResults(cleanData);
    } catch (err){
      console.error("API error: ", err);
      setResults([]);
      setError("Could not contact the API, try again later...")
    }
    
  }

  const onTeamClick = async (teamId) => {
    const data = await getTeam(teamId);
    const url = await getTeamImage(teamId);
    setTeamData(data);
    setImage(url);
  }

  const onShowSquad = async (teamId) => {
    const team = await getTeamSquad(teamId);
    setPlayers(team.data.players);
    setTeamData(null);
  }

  //Skapat en HomePage
  const HomePage = () => (
    <>
      <HeroSection onSearchSubmit={onSearchSubmit} />
      {error && (
        <p className="text-danger mt-3">{error}</p>
      )}
      <SearchResults results={results} onTeamClick={onTeamClick} />

      <hr />

      <PlayerList
        players={players}
        image={image}
        onPlayerClick={onPlayerClick}
      />

      <TeamModal
        teamData={teamData}
        show={teamData !== null}
        onHide={() => setTeamData(null)}
        onShowSquad={onShowSquad}
        image={image}
      />

      <PlayerModal
        playerData={playerData}
        show={playerData !== null}
        onHide={() => setPlayerData(null)}
      />
      
      <FooterSection />
    </>
  );
  
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route 
          path="/" 
          element={<HomePage />} 
        />

        <Route 
          path="/favorites" 
          element={<FavoritesPage 
          playerKey="favoritePlayers" 
          teamKey="favoriteTeams"/>} 
        />

        <Route 
          path="/worldcup" 
          element={<WorldCupPage />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
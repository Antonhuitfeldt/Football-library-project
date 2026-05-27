import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import HeroSection from './components/HeroSection/HeroSection';
import SearchResults from './components/SearchResults/SearchResults';
import { searchResults, getTeam } from './api/sportsApiPro';
import TeamModal from './components/TeamModal/TeamModal';

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

  const onSearchSubmit = async (query) => {
    const result = await searchResults(query);

    console.log(result);
    console.log(result.data);
    console.log(result.data.results);

    const cleanData = BasicTeamData(result.data.results);
    setResults(cleanData);
  }

  // Tillfällig testknapp
  const onTeamClick = async (teamId) => {
    const data = await getTeam(teamId);
    setTeamData(data);
  }

  return( 
  <main>
    <div className='nav-bar'>
      <NavBar />
    </div>
    
    <div className="hero-page">
      <HeroSection onSearchSubmit={onSearchSubmit}/>
      <SearchResults results={results}/>

      {/* Tillfällig testknapp */}
      <button onClick={() => onTeamClick(35)}>Testa Barcelona</button>

      <TeamModal
        teamData={teamData}
        show={teamData !== null}
        onHide={() => setTeamData(null)}
      />
    </div>
  </main>
  )
}

export default App;
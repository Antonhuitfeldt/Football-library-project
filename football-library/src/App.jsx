import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import SearchResults from './components/SearchResults/SearchResults';
import SearchField from './components/SearchField/SearchField';
import { searchPlayers, getTeam } from './api/sportsApiPro';
import TeamModal from './components/TeamModal/TeamModal';

function App() {

  const [player, setPlayer] = useState([]);
  const [teamData, setTeamData] = useState(null);

  const onSearchSubmit = async (query) => {
    const result = await searchPlayers(query);
    setPlayer(result);
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
      <h1>Football Library</h1>
      <SearchField onSearchSubmit={onSearchSubmit}/>
      <SearchResults player={player}/>

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
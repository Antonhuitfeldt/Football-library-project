import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import SearchResults from './components/SearchResults/SearchResults';
import SearchField from './components/SearchField/SearchField';
import { searchPlayers } from './api/sportsApiPro';

function App() {

  

  const [player, setPlayer] = useState([]);

  const onSearchSubmit = async (query) => {
    const result = await searchPlayers(query);
    setPlayer(result);
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
    </div>
  </main>
  )
}

export default App;
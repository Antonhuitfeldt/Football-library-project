import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import SearchResults from './components/SearchResults/SearchResults';
import SearchField from './components/SearchField/SearchField';
import { searchResults } from './api/sportsApiPro';

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

  const onSearchSubmit = async (query) => {
    const result = await searchResults(query);

    console.log(result);
    console.log(result.data);
    console.log(result.data.results);

    const cleanData = BasicTeamData(result.data.results);
    setResults(cleanData);
  }

  return( 
  <main>
    <div className='nav-bar'>
      <NavBar />
    </div>
    
    <div className="hero-page">
      <h1>Football Library</h1>
      <SearchField onSearchSubmit={onSearchSubmit}/>
      <SearchResults results={results}/>
    </div>
  </main>
  )
}

export default App;
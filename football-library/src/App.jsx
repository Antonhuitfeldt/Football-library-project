import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import SearchResults from './components/SearchResults/SearchResults';
import SearchField from './components/SearchField/SearchField';

function App() {
  return( 
  <main>
    <div className='nav-bar'>
      <NavBar />
    </div>
    
    <div className="hero-page">
      <h1>Football Library</h1>
      <SearchField />
      <SearchResults />
    </div>
  </main>
  )
}

export default App;
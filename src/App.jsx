import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import FooterSection from "./components/FooterSection/FooterSection";
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import WorldCupPage from './pages/WorldCupPage/WorldCupPage';

const App =() => {

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

      <FooterSection />
      
    </Router>
  );
}

export default App;
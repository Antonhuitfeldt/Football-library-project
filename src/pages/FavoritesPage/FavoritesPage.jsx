import { useFavorites } from "../../hooks/useFavorites";
import ResultCard from "../../components/ResultCard/ResultCard";
import "./FavoritesPage.css";

const FavoritesPage = ({ playerKey, teamKey }) => {

  const { favorites: playerFavorites } = useFavorites(playerKey);
  const { favorites: teamFavorites } = useFavorites(teamKey);

  return (
    <div className="favorites-page">
      <div className="favorites-content">

        <h2>Favorite Players</h2>
        {playerFavorites.length === 0 && <p>No favorite players yet.</p>}

        {playerFavorites.map((player) => (
          <ResultCard
            key={player.id}
            item={player}
            keyName={playerKey}
          />
        ))}

        <hr />

        <h2>Favorite Teams</h2>
        {teamFavorites.length === 0 && <p>No favorite teams yet.</p>}

        {teamFavorites.map((team) => (
          <ResultCard
            key={team.id}
            item={team}
            keyName={teamKey}
          />
        ))}

      </div>
    </div>
  );
};

export default FavoritesPage;
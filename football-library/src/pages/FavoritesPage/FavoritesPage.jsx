import React from "react";
import { useFavorites } from "../../hooks/useFavorites";
import "./FavoritesPage.css";

const FavoritesPage = ({ playerKey, teamKey }) => {

    const { favorites: playerFavorites } = useFavorites(playerKey);
    const { favorites: teamFavorites } = useFavorites(teamKey);

    return (
        <div className="favorites-page">
            <div className="favorites-content">

                <h2>Favorite Players</h2>
                {playerFavorites.length === 0 && <p>No favorite players yet.</p>}
                <ul>
                    {playerFavorites.map((player) => (
                        <li key={player.id}>{player.name}</li>
                    ))}
                </ul>

                <hr />

                <h2>Favorite Teams</h2>
                {teamFavorites.length === 0 && <p>No favorite teams yet.</p>}
                <ul>
                    {teamFavorites.map((team) => (
                        <li key={team.id}>{team.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FavoritesPage;
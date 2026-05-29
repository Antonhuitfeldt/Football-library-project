import React from "react";
import { useFavorites } from "../../hooks/useFavorites";
import "./FavoritesPage.css";

const FavoritesPage = ({ keyName }) => {

    const { favorites } = useFavorites(keyName);

    return (
        <div className="favorites-page">
            <div className="favorites-content">
                <h2>Your favorites</h2>

                {/* Om listan är tom */}
                {favorites.length === 0 && <p>No favorites yet.</p>}

                {/* Om listan har innehåll */}
                <ul>
                    {favorites.map((item) => (
                    <li keyName={item.id}>
                        {item.name}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FavoritesPage;
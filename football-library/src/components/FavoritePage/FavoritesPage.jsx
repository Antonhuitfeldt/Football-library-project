import React from "react";
import { useFavorites } from "../hooks/useFavorites";
import "./FavoritesPage.css";

const FavoritesPage = ({ key }) => {

    const { favorites } = useFavorites(key);

    return (
        <div>
            <h2>Your favorites</h2>

            {/* Om listan är tom */}
            {favorites.length === 0 && <p>No favorites yet.</p>}

            {/* Om listan har innehåll */}
            <ul>
                {favorites.map((item) => (
                <li key={item.id}>
                    {item.name}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoritesPage;
import React from "react";
import { useFavorites } from "../../hooks/useFavorites";
import "./FavoriteButton.css";

// Knapp som kan lägga till/ta bort item från favoriter
const FavoriteButton =({ item, keyName }) => {

    // Anropa hooken med rätt keyName (t.ex. "favoriteTeams" eller "favoritePlayers")
    const { isFavorite, toggleFavorite } = useFavorites(keyName);

    // Kolla om just det här itemet är favorit
    const favorite = isFavorite(item.id);

    // Funktion som körs när man klickar på knappen
    const handleClick = () => {
        // Ber hooken toggla favoritstatus för detta item
        toggleFavorite(item);
    }

    // Renderar en knapp med olika text beroende på om item är favorit eller inte
    return (
        <button 
        className="btn btn-secondary"
        onClick={handleClick}>
            {favorite ? "Remove from favorites" : "Add to favorites"}
        </button>
    )
}

export default FavoriteButton;

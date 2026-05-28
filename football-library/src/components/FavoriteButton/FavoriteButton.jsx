import React from "react";
import { useFavorites } from "../hooks/useFavorites";
import "./FavoriteButton.css";
import { FaHeart } from "react-icons/fa";

// Knapp som kan lägga till/ta bort item från favoriter
const FavoriteButton =({ item, key }) => {

    // Anropa hooken med rätt key (t.ex. "favoriteTeams" eller "favoritePlayers")
    const { isFavorite, toggleFavorite } = useFavorites(key);

    // Kolla om just det här itemet är favorit
    const favorite = isFavorite(item.id);

    // Funktion som körs när man klickar på knappen
    function handleClick() {

        // Ber hooken toggla favoritstatus för detta item
        toggleFavorite(item);
    }

    // Renderar en knapp med olika text beroende på om item är favorit eller inte
    return (
        <button onClick={handleClick}>
            {favorite ? "Remove from favorites" : "Add to favorites"}
        </button>
    )
}

export default FavoriteButton;

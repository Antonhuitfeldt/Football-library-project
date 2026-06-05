import { useFavorites } from "../../hooks/useFavorites";

// Handles adding/removing an item from a specific favorites list
// Uses the useFavorites hook to abstract localStorage logic
const FavoriteButton =({ item, keyName }) => {

// Access helper functions for checking and toggling favorites
    const { isFavorite, toggleFavorite } = useFavorites(keyName);

// Determine if this item is already marked as a favorite
    const favorite = isFavorite(item.id);

// Toggle favorite status when the button is clicked
    const handleClick = () => {
        toggleFavorite(item);
    }

    return (
        <button 
        className="btn btn-secondary"
        onClick={handleClick}>
            {favorite ? "Remove from favorites" : "Add to favorites"}
        </button>
    )
}

export default FavoriteButton;

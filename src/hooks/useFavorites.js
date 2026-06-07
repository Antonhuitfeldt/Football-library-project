import { useState, useEffect} from 'react'
import { getFavorites, toggleFavorites } from "../LocalStorage/favorites"

/* Favorites hook */
export const useFavorites = (keyName) => {
  const [favorites, setFavorites] = useState([]);

  // Load saved favorites
  useEffect(() => {
    const stored = getFavorites(keyName);
    setFavorites(stored);
  }, [keyName]);

  // Check if item is favorite
  const isFavorite = (id) => {
    const stored = getFavorites(keyName);
    return stored.some(item => item.id === id);
  };

  // Add/remove favorite
  const toggleFavorite = (item) => {
    const exists = favorites.some(fav => fav.id === item.id);

    let updatedList;
    if (exists) {
      updatedList = favorites.filter(fav => fav.id !== item.id);
    } else {
      updatedList = [...favorites, item];
    }

    setFavorites(updatedList);
    toggleFavorites(keyName, item);
  };

  return {favorites, isFavorite, toggleFavorite};
};

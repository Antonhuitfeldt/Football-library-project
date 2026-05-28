import { useState, useEffect} from 'react'
import { getFavorites, toggleFavorites } from "../LocalStorage/favorites"

// Custom hook som hanterar favoriter för en viss key
export function useFavorites(keyName) {

    // State som håller alla favoriter i minnet
    const [favorites, setFavorites] = useState([]);

    // Körs när hooken laddas: hämtar sparade favoriter från localStorage
    useEffect(() => {
        const stored = getFavorites(keyName);   // Hämta lista från localStorage
        setFavorites(stored);               // Spara listan i state
    }, [keyName]); // Körs igen om key ändras


    // Kollar om ett visst id finns i favoritlistan (mot state)
    function isFavorite(id) {
        return favorites.some(item => item.id === id);
    }


    // Lägger till eller tar bort ett item från favoriter
    function toggleFavorite(item) {

        const exists = favorites.some(fav => fav.id === item.id); // Finns item redan?

        let updatedList;

        if (exists) {
            updatedList = favorites.filter(fav => fav.id !== item.id); // Ta bort
        } else {
            updatedList = [...favorites, item]; // Lägg till
        }

        setFavorites(updatedList); // Uppdatera UI direkt

        toggleFavorites(keyName, item); // Spara ändringen i localStorage
    }

    // Returnerar allt UI behöver använda
    return {
        favorites, 
        isFavorite, 
        toggleFavorite
    };
}

// Hämtar favoriter från localStorage baserat på en key
export function getFavorites(key) {
    // Hämtar sparad data från localStorage
    const stored = localStorage.getItem(key);

    // Om inget finns, returnera en tom lista
    if (!stored){
        return [];
    }

    try {
        // Försök omvandla JSON-strängen till en array
        return JSON.parse(stored);
    } catch {
        // Om JSON är korrupt, returnera tom lista istället för att krascha
        return [];
    }
}


// Sparar en lista av favoriter till localStorage
export function saveFavorites(key, list) {
    // Gör om listan till en JSON-sträng
    const json = JSON.stringify(list);

    // Sparar JSON-strängen under rätt key
    localStorage.setItem(key, json);
}


// Kollar om ett visst id redan finns i favoritlistan
export function isFavorite(key, id) {
    // Hämtar listan från localStorage
    const list = getFavorites(key);

    // Returnerar true om id finns i listan, annars false
    return list.some(item => item.id === id);
}


// Lägger till eller tar bort ett item från favoriter
export function toggleFavorites(key, item) {
    // Hämtar nuvarande lista
    const list = getFavorites(key);

    // Kollar om item redan finns i listan
    const exists = list.some(fav => fav.id === item.id);

    let updatedList;

    if (exists) {
        // Om item finns → ta bort det
        updatedList = list.filter(fav => fav.id !== item.id);
    } else {
        // Om item inte finns → lägg till det
        updatedList = [...list, item];
    }

    // Spara den uppdaterade listan
    saveFavorites(key, updatedList);
}

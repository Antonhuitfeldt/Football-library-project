// Hämtar favoriter från localStorage baserat på en key
export const getFavorites = (keyName) => {
  // Hämtar sparad data från localStorage
  const stored = localStorage.getItem(keyName);

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
export const saveFavorites = (keyName, list) => {
  // Gör om listan till en JSON-sträng
  const json = JSON.stringify(list);

  // Sparar JSON-strängen under rätt key
  localStorage.setItem(keyName, json);
}

// Kollar om ett visst id redan finns i favoritlistan
export const isFavorite = (keyName, id) => {
  // Hämtar listan från localStorage
  const list = getFavorites(keyName);

  // Returnerar true om id finns i listan, annars false
  return list.some(item => item.id === id);
}


// Lägger till eller tar bort ett item från favoriter
export const toggleFavorites = (keyName, item) => {
    // Hämtar nuvarande lista
    const list = getFavorites(keyName);

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
    saveFavorites(keyName, updatedList);
}

// Get favorites for a key
export const getFavorites = (keyName) => {
  const stored = localStorage.getItem(keyName);

  if (!stored){
    return [];
  }
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

// Save favorites list
export const saveFavorites = (keyName, list) => {
  const json = JSON.stringify(list);

  localStorage.setItem(keyName, json);
};

// Check if id is favorite
export const isFavorite = (keyName, id) => {
  const list = getFavorites(keyName);

  return list.some(item => item.id === id);
};

// Add/remove favorite
export const toggleFavorites = (keyName, item) => {
    const list = getFavorites(keyName);
    const exists = list.some(fav => fav.id === item.id);

    let updatedList;
    if (exists) {
        updatedList = list.filter(fav => fav.id !== item.id);
    } else {
        updatedList = [...list, item];
    }

    saveFavorites(keyName, updatedList);
};

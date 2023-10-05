import { createContext } from "react";

import { DRINK } from "../models/drink";
import { Favorite } from "../models/favorites";

// Define what the context looks like
interface FavoritesContextModel {
  favoriteDrinks: Favorite[];
  addFavorite: (drink: DRINK) => void;
  removeFavorite: (drink: DRINK) => void;
}

// Defines default values for the context
const defaultValue: FavoritesContextModel = {
  favoriteDrinks: [],
  addFavorite: (drink: DRINK) => {},
  removeFavorite: (drink: DRINK) => {},
};

// Use React to create a new context using the defaults
const FavoritesContext = createContext(defaultValue);

// Export the new context from our module
export default FavoritesContext;

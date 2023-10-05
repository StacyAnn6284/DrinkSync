import { ReactNode, useContext, useEffect, useState } from "react";
import FavoritesContext from "./FavoritesContext";
import {
  createFavorite,
  deleteFavorite,
  getFavorites,
} from "../services/favoriteService";
import { Favorite } from "../models/favorites";
import { DRINK } from "../models/drink";
import UserContext from "../components/Context/UserContext";

interface Props {
  children: ReactNode;
}

export const FavoritesContextProvider = ({ children }: Props) => {
  const { user } = useContext(UserContext);
  const [favoriteDrinks, setFavoriteDrinks] = useState<Favorite[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        try {
          const data = await getFavorites(user.uid);
          setFavoriteDrinks(data);
        } catch (error: any) {
          if (error.response && error.response.status === 404) return;
        }
      }
    };
    fetchFavorites();
  }, [user]);

  const addFavorite = async (drink: DRINK) => {
    const favorite = await createFavorite(user!.uid, drink);
    setFavoriteDrinks((prev) => [...prev, favorite]);
  };

  const removeFavorite = async (drink: DRINK) => {
    const index = favoriteDrinks.findIndex(
      (favorite) => favorite.drink.idDrink === favorite._id
    );
    if (index >= 0) {
      deleteFavorite(user!.uid, favoriteDrinks[index].drink.idDrink);
    }

    setFavoriteDrinks((prev) => {
      const newFavorites = [...prev];
      newFavorites.splice(index, 1);
      return newFavorites;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteDrinks, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

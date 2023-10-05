import { useContext, useState } from "react";
import { DrinkList } from "../components/DrinkList/DrinkList";
import FavoritesContext from "./FavoritesContext";

export const Favorites = () => {
  const { favoriteDrinks } = useContext(FavoritesContext);
  const [largeCard, setLargeCard] = useState(true);
  return (
    <div className="Favorites">
      <DrinkList
        drinks={favoriteDrinks.map((favorite) => favorite.drink)}
        largeCard={largeCard}
        favorites={true}
      ></DrinkList>
    </div>
  );
};

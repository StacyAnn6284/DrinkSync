import { useContext, useEffect, useState } from "react";

import { DRINK } from "../../Models/drink";
import "./DrinkCard.css";
import { Link } from "react-router-dom";
import { getDrinkbyID } from "../../services/drinkServices";
import FavoritesContext from "../../favorites/FavoritesContext";

// passing each individual drink down from DrinkList
interface DrinkCardProps {
  drink: DRINK;
  largeCard: boolean;
  favorited?: boolean;
}

export const DrinkCard = ({ drink, largeCard, favorited }: DrinkCardProps) => {
  const [expanded, setExpanded] = useState(largeCard);
  const { addFavorite, removeFavorite } = useContext(FavoritesContext);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const [drinkbyID, setDrinkbyID] = useState(drink);

  // using the drinkID to pull the drink from the API for detailed drink instructions
  useEffect(() => {
    // only do this if expanded is true
    if (expanded) {
      getDrinkbyID(drink.idDrink).then((response) => {
        setDrinkbyID(response.data.drinks[0]);
      });
    }
  }, [expanded]);

  return (
    <li className={expanded ? "bigger" : "smaller"}>
      <div className="drinkHeading">
        <div className="nameAndButtons">
          <h3>{drinkbyID.strDrink}</h3>
          <div className="button">
            <button
              onClick={() => {
                if (!favorited) {
                  addFavorite(drink);
                } else {
                  removeFavorite(drink);
                }
              }}
            >
              {!favorited ? "Save Drink" : "Unsave"}
            </button>
            <button onClick={handleExpand}>
              {expanded ? "See Less" : "Full Recipe"}
            </button>
          </div>
        </div>
        <img src={drinkbyID.strDrinkThumb}></img>
      </div>
      {expanded && (
        <div>
          <ul>
            {drinkbyID.strIngredient1 != null && (
              <li>
                {drinkbyID.strMeasure1} {drinkbyID.strIngredient1}
              </li>
            )}
            {drinkbyID.strIngredient2 != null && (
              <li>
                {drinkbyID.strMeasure2} {drinkbyID.strIngredient2}
              </li>
            )}
            {drinkbyID.strIngredient3 != null && (
              <li>
                {drinkbyID.strMeasure3}
                {drinkbyID.strIngredient3}
              </li>
            )}
            {drinkbyID.strIngredient4 != null && (
              <li>
                {drinkbyID.strMeasure4}
                {drinkbyID.strIngredient4}
              </li>
            )}
            {drinkbyID.strIngredient5 != null && (
              <li>
                {drinkbyID.strMeasure5}
                {drinkbyID.strIngredient5}
              </li>
            )}
            {drinkbyID.strIngredient6 != null && (
              <li>
                {drinkbyID.strMeasure6}
                {drinkbyID.strIngredient6}
              </li>
            )}
            {drinkbyID.strIngredient7 != null && (
              <li>
                {drinkbyID.strMeasure7}
                {drinkbyID.strIngredient7}
              </li>
            )}
            {drinkbyID.strIngredient8 != null && (
              <li>
                {drinkbyID.strMeasure8}
                {drinkbyID.strIngredient8}
              </li>
            )}
            {drinkbyID.strIngredient9 != null && (
              <li>
                {drinkbyID.strMeasure9}
                {drinkbyID.strIngredient9}
              </li>
            )}
            {drinkbyID.strIngredient10 != null && (
              <li>
                {drinkbyID.strMeasure10}
                {drinkbyID.strIngredient10}
              </li>
            )}
            {drinkbyID.strIngredient11 != null && (
              <li>
                {drinkbyID.strMeasure11}
                {drinkbyID.strIngredient11}
              </li>
            )}
            {drinkbyID.strIngredient12 != null && (
              <li>
                {drinkbyID.strMeasure12}
                {drinkbyID.strIngredient12}
              </li>
            )}
            {drinkbyID.strIngredient13 != null && (
              <li>
                {drinkbyID.strMeasure13}
                {drinkbyID.strIngredient13}
              </li>
            )}
            {drinkbyID.strIngredient14 != null && (
              <li>
                {drinkbyID.strMeasure14}
                {drinkbyID.strIngredient14}
              </li>
            )}
            {drinkbyID.strIngredient15 != null && (
              <li>
                {drinkbyID.strMeasure15}
                {drinkbyID.strIngredient15}
              </li>
            )}
          </ul>
          <Link to="/substitutes">
            <p>Missing an ingredient? Find a substitution</p>
          </Link>
          <p>{drinkbyID.strInstructions}</p>
        </div>
      )}
    </li>
  );
};

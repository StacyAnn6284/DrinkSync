import { useEffect, useState } from "react";
import { DRINK } from "../../models/drink";
import "./DrinkCard.css";
import { Link } from "react-router-dom";
import { getDrinkbyID } from "../../services/drinkServices";

interface DrinkCardProps {
  drink: DRINK;
  largeCard: boolean;
}

export const DrinkCard = ({ drink, largeCard }: DrinkCardProps) => {
  const [expanded, setExpanded] = useState(largeCard);
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const [drinkbyID, setDrinkbyID] = useState(drink);

  useEffect(() => {
    getDrinkbyID(drink.idDrink).then((response) => {
      setDrinkbyID(response.data.drinks[0]);
    });
  }, []);

  return (
    <li className={expanded ? "bigger" : "smaller"} onClick={handleExpand}>
      <h3>{drinkbyID.strDrink}</h3>

      <img src={drinkbyID.strDrinkThumb}></img>
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
                {" "}
                {drinkbyID.strMeasure2} {drinkbyID.strIngredient2}
              </li>
            )}
            {drinkbyID.strIngredient3 != null && (
              <li>
                {" "}
                {drinkbyID.strMeasure3}
                {drinkbyID.strIngredient3}
              </li>
            )}
            {drinkbyID.strIngredient4 != null && (
              <li>
                {" "}
                {drinkbyID.strMeasure4}
                {drinkbyID.strIngredient4}
              </li>
            )}
            {drinkbyID.strIngredient5 != null && (
              <li>
                {" "}
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
            {" "}
            <p>Missing an ingredient? Find a substitution</p>
          </Link>
          <p>{drinkbyID.strInstructions}</p>
        </div>
      )}
    </li>
  );
};

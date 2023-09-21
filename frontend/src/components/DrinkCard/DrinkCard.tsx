import { DRINK } from "../../models/drink";

interface DrinkCardProps {
  drink: DRINK;
}

export const DrinkCard = ({ drink }: DrinkCardProps) => {
  return (
    <div>
      <h1>{drink.strDrink}</h1>
      <img src={drink.strDrinkThumb}></img>
      <ul>
        {drink.strIngredient1 != null && (
          <li>
            {drink.strMeasure1} {drink.strIngredient1}
          </li>
        )}
        {drink.strIngredient2 != null && (
          <li>
            {" "}
            {drink.strMeasure2} {drink.strIngredient2}
          </li>
        )}
        {drink.strIngredient3 != null && (
          <li>
            {" "}
            {drink.strMeasure3}
            {drink.strIngredient3}
          </li>
        )}
        {drink.strIngredient4 != null && (
          <li>
            {" "}
            {drink.strMeasure4}
            {drink.strIngredient4}
          </li>
        )}
        {drink.strIngredient5 != null && (
          <li>
            {" "}
            {drink.strMeasure5}
            {drink.strIngredient5}
          </li>
        )}
        {drink.strIngredient6 != null && (
          <li>
            {drink.strMeasure6}
            {drink.strIngredient6}
          </li>
        )}
        {drink.strIngredient7 != null && (
          <li>
            {drink.strMeasure7}
            {drink.strIngredient7}
          </li>
        )}
        {drink.strIngredient8 != null && (
          <li>
            {drink.strMeasure8}
            {drink.strIngredient8}
          </li>
        )}
        {drink.strIngredient9 != null && (
          <li>
            {drink.strMeasure9}
            {drink.strIngredient9}
          </li>
        )}
        {drink.strIngredient10 != null && (
          <li>
            {drink.strMeasure10}
            {drink.strIngredient10}
          </li>
        )}
        {drink.strIngredient11 != null && (
          <li>
            {drink.strMeasure11}
            {drink.strIngredient11}
          </li>
        )}
        {drink.strIngredient12 != null && (
          <li>
            {drink.strMeasure12}
            {drink.strIngredient12}
          </li>
        )}
        {drink.strIngredient13 != null && (
          <li>
            {drink.strMeasure13}
            {drink.strIngredient13}
          </li>
        )}
        {drink.strIngredient14 != null && (
          <li>
            {drink.strMeasure14}
            {drink.strIngredient14}
          </li>
        )}
        {drink.strIngredient15 != null && (
          <li>
            {drink.strMeasure15}
            {drink.strIngredient15}
          </li>
        )}
      </ul>
      <p>{drink.strInstructions}</p>
    </div>
  );
};

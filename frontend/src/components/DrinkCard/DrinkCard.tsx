import { DRINK } from "../../models/drink";

interface DrinkCardProps {
  drink: DRINK;
}

export const DrinkCard = ({ drink }: DrinkCardProps) => {
  return (
    <div>
      <h1>{drink.strDrink}</h1>
    </div>
  );
};

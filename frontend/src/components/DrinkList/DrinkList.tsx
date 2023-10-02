import { DRINK } from "../../models/drink";
import { DrinkCard } from "../DrinkCard/DrinkCard";
import "./DrinkList.css";

// pulling the drink array down from Main
interface DrinkListProps {
  drinks: DRINK[];
  largeCard: boolean;
}

export const DrinkList = ({ drinks, largeCard }: DrinkListProps) => {
  // setting up two columns to be used with desktop view
  const halfway = Math.floor(drinks.length / 2);
  const col1 = drinks.splice(0, halfway);
  const col2 = drinks;

  try {
    return (
      <ul className="DrinkList">
        <div className="Column1">
          {col1?.map((drink) => (
            <DrinkCard
              key={drink.idDrink}
              largeCard={largeCard}
              drink={drink}
            ></DrinkCard>
          ))}
        </div>
        <div className="Column2">
          {col2?.map((drink) => (
            <DrinkCard
              key={drink.idDrink}
              largeCard={largeCard}
              drink={drink}
            ></DrinkCard>
          ))}
        </div>
      </ul>
    );
  } catch (error) {
    return (
      <div>
        <h3>Search Returned no results</h3>
      </div>
    );
  }
};

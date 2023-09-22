import { DRINK } from "../../models/drink";
import { DrinkCard } from "../DrinkCard/DrinkCard";

interface DrinkListProps {
  drinks: DRINK[];
  largeCard: boolean;
}

export const DrinkList = ({ drinks, largeCard }: DrinkListProps) => {
  try {
    return (
      <ul className="DrinkList">
        {drinks?.map((drink) => (
          <DrinkCard largeCard={largeCard} drink={drink}></DrinkCard>
        ))}
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

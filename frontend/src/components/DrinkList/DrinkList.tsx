import { DRINK } from "../../models/drink";
import { DrinkCard } from "../DrinkCard/DrinkCard";

interface DrinkListProps {
  drinks: DRINK[];
}

export const DrinkList = ({ drinks }: DrinkListProps) => {
  return (
    <div className="DrinkList">
      {drinks?.map((drink) => (
        <DrinkCard drink={drink}></DrinkCard>
      ))}
    </div>
  );
};

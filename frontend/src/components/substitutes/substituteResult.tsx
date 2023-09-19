import { substitute } from "../../models/substitute";

interface subResultProps {
  substitute: substitute;
}

export const subResult = ({ substitute }: subResultProps) => {
  return (
    <div>
      <h2>{substitute.missingIngredient}</h2>
      <h3>{substitute.solution}</h3>
    </div>
  );
};

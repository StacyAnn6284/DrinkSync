import React from "react";
import { Substitute } from "../../models/substitute";

const SubstituteResult = ({ substitute }: { substitute: Substitute }) => {
  return (
    <div className="substitute-result">
      <h2>Missing Ingredient: {substitute.missingIngredient}</h2>
      <p>Solution: {substitute.solution}</p>
    </div>
  );
};

export default SubstituteResult;

import React from "react";
import "./substitutes.css";
import { Substitute } from "../../../Models/substitute";

const SubstituteResult = ({ substitute }: { substitute: Substitute }) => {
  return (
    <div className="substitute-result">
      <h2 className="missing-ingrdnt-name">
        Missing Ingredient: {substitute.missingIngredient}
      </h2>
      <p className="solution-para">Solution: {substitute.solution}</p>
    </div>
  );
};

export default SubstituteResult;

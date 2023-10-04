import React from "react";
import SubstituteResult from "./substituteResult";
import "./substitutes.css";
import { Substitute } from "../../Models/substitute";

interface SubstituteResultListProps {
  substitutes: Substitute[];
  searchTerm: string;
}

const SubstituteResultList: React.FC<SubstituteResultListProps> = ({
  substitutes,
  searchTerm,
}) => {
  // Filter the substitutes based on the search term
  const filteredSubstitutes = substitutes.filter((substitute) =>
    substitute.missingIngredient
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="substitute-result-list">
      {filteredSubstitutes.length === 0 ? (
        <p>No substitutes found for '{searchTerm}'</p>
      ) : (
        <ul className="sub-result-ul">
          {filteredSubstitutes.map((substitute, index) => (
            <SubstituteResult key={index} substitute={substitute} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubstituteResultList;

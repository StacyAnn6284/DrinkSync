import React from "react";
import SubstituteResult from "./substituteResult";
import { Substitute } from "../../models/substitute";

interface SubstituteResultListProps {
  substitutes: Substitute[];
}

const SubstituteResultList: React.FC<SubstituteResultListProps> = ({
  substitutes,
}) => {
  return (
    <div className="substitute-result-list">
      {substitutes.length > 0 ? (
        substitutes.map((substitute, index) => (
          <SubstituteResult key={index} substitute={substitute} />
        ))
      ) : (
        <p>No substitutes found.</p>
      )}
    </div>
  );
};

export default SubstituteResultList;

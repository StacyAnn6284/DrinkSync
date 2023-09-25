import React, { useState, useEffect } from "react";
import { Substitute } from "../../Models/substitute";
import SubstituteService from "../../services/substituteService";
import SubstituteSearchForm from "../substitutes/substituteSearchForm";
import SubstituteResultList from "../substitutes/substituteResultList";

const MainSubstitute: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [substitutes, setSubstitutes] = useState<Substitute[]>([]);

  useEffect(() => {
    if (searchTerm) {
      // retrieve substitutes when searchTerm changes
      SubstituteService.searchSubstitutes(searchTerm)
        .then((data) => {
          setSubstitutes(data);
        })
        .catch((error) => {
          console.error("Error fetching substitutes:", error);
        });
    } else {
      // Clear substitutes when searchTerm is empty
      setSubstitutes([]);
    }
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="MainSubstitute">
      <h1>Substitute Finder</h1>
      <SubstituteSearchForm onSearch={handleSearch} />
      <SubstituteResultList substitutes={substitutes} searchTerm={searchTerm} />
    </div>
  );
};

export default MainSubstitute;

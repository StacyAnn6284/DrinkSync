import React, { useState, useEffect } from "react";
import { Substitute } from "../../models/substitute";
import SubstituteService from "../../services/substituteService";
import SubstituteSearchForm from "../substitutes/substituteSearchForm";
import SubstituteResultList from "../substitutes/substituteResultList";
import syncLogo from "../Assets/syncLogo.png";
import "../substitutes/substitutes.css";

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
      <h1 className="subFinderHeader">Substitute Finder</h1>
      <img className="sync-subimg" src={syncLogo} alt="logo" />
      <SubstituteSearchForm onSearch={handleSearch} />
      <SubstituteResultList substitutes={substitutes} searchTerm={searchTerm} />
    </div>
  );
};

export default MainSubstitute;

import React, { useState } from "react";
import { Substitute } from "../../models/substitute";

import "./substitutes.css";


interface SubstituteSearchFormProps {
  onSearch: (searchTerm: string) => void;
}

const SubstituteSearchForm: React.FC<SubstituteSearchFormProps> = ({
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="substitute-search-form">
      <input
        className="sub-form-input"
        type="text"
        placeholder="your missing ingredient"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="sub-search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SubstituteSearchForm;

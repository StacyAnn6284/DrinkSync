import React, { useState } from "react";
import { Substitute } from "../../Models/substitute";

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
        type="text"
        placeholder="Search for missing ingredient"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SubstituteSearchForm;

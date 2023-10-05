import React, { useState } from "react";
// import { Substitute } from "../../Models/substitute";

import "./substitutes.css";

interface SubstituteSearchFormProps {
  onSearch: (searchTerm: string) => void; //Callback function to handle search
}

const SubstituteSearchForm: React.FC<SubstituteSearchFormProps> = ({
  onSearch,
}) => {
  //State to manage the search term input
  const [searchTerm, setSearchTerm] = useState("");

  //Handle the search button click
  const handleSearch = () => {
    //Call the 'onSearch' callback with the current search term
    onSearch(searchTerm);
  };

  return (
    <div className="substitute-search-form">
      <input
        className="sub-form-input"
        type="text"
        placeholder="your missing ingredient"
        value={searchTerm}
        //Update the search term state on input change
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="sub-search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SubstituteSearchForm;

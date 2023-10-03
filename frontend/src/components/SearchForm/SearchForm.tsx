import { FormEvent, useEffect, useState } from "react";
import "./SearchForm.css";
import syncLogo from "../Assets/syncLogo.png";

interface SearchFormProps {
  submit(term: string, by: string): void;
  currentTerm: string;
  hideRandom(): void;
}

export const SearchForm = ({
  submit,
  currentTerm,
  hideRandom,
}: SearchFormProps) => {
  const [term, setTerm] = useState(currentTerm);
  const [searchBy, setSearchBy] = useState("ingredient");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit(term, searchBy);
    hideRandom();
    setTerm("");
  };

  useEffect(() => {
    setTerm(currentTerm);
  }, [currentTerm]);

  return (
    <form onSubmit={handleSubmit} className="drinkSearchForm">
      <h1>Drink Finder</h1>
      <img className="sync-subimg" src={syncLogo} alt="logo" />
      <div className="radioButtons">
        <input
          id="ingredient"
          type="radio"
          value="ingredient"
          name="option"
          checked={searchBy === "ingredient"}
          onClick={() => setSearchBy("ingredient")}
          onChange={() => setSearchBy("ingredient")}
        />
        <label htmlFor="ingredient">Search by Ingredient</label>

        <input
          id="drinkName"
          type="radio"
          value="name"
          name="option"
          checked={searchBy === "name"}
          onClick={() => setSearchBy("name")}
          onChange={() => setSearchBy("name")}
        />
        <label htmlFor="drinkName">Search by Name</label>
      </div>
      <div>
        <input
          className="search-form-input"
          type="text"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          value={term}
        />
        <button className="searchButton"> Search </button>
      </div>
    </form>
  );
};

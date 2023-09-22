import { FormEvent, useEffect, useState } from "react";

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
  };

  useEffect(() => {
    setTerm(currentTerm);
  }, [currentTerm]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="ingredient"
        type="radio"
        value="ingredient"
        name="option"
        // defaultChecked
        checked={searchBy === "ingredient"}
        onClick={() => setSearchBy("ingredient")}
      />
      <label htmlFor="ingredient">Search by Ingredient</label>

      <input
        id="drinkName"
        type="radio"
        value="name"
        name="option"
        checked={searchBy === "name"}
        onClick={() => setSearchBy("name")}
      />
      <label htmlFor="drinkName">Search by Name</label>

      <input
        type="text"
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        value={term}
      />
      <button> Search</button>
    </form>
  );
};

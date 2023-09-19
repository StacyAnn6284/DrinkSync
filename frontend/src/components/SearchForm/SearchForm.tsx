import { FormEvent, useEffect, useState } from "react";

interface SearchFormProps {
  submit(term: string): void;
  currentTerm: string;
}

export const SearchForm = ({ submit, currentTerm }: SearchFormProps) => {
  const [term, setTerm] = useState(currentTerm);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    submit(term);
  };

  useEffect(() => {
    setTerm(currentTerm);
  }, [currentTerm]);

  return (
    <form onSubmit={handleSubmit}>
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

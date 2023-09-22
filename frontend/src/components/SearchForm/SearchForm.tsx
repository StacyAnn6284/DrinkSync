import { FormEvent, useEffect, useState } from "react";

interface SearchFormProps {
  submit(term: string): void;
  currentTerm: string;
  hideRandom(): void;
}

export const SearchForm = ({
  submit,
  currentTerm,
  hideRandom,
}: SearchFormProps) => {
  const [term, setTerm] = useState(currentTerm);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit(term);
    hideRandom();
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

import e from "express";
import { FormEvent, useState } from "react";

interface subSearchFormProps {
  submit(term: string): void;
}

export const subSearchForm = ({ submit }: subSearchFormProps) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit(term);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        value={term}
      />
      <button>Search</button>
    </form>
  );
};

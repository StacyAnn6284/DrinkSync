import { useEffect, useState } from "react";
import { subResultList } from "./substituteResultList";
import { subSearchForm } from "./substituteSearchForm";

export const SubstituteFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [substitutes, setSubs] = useState<missingIngredient[]>([]);

  const updateSearchTerm = (term: string) => {
    setSearchTerm = term;
  };

useEffect(() => {
  searchSubs(searchTerm).then((response) => {
    setSubs(response.data.substitutes); //may not be correct, go back and fix later
  });
} [searchTerm]);

return (
  <main>
    <subSearchForm submit={updateSearchTerm}></subSearchForm>
    {/* <subResultList substitutes = {substitutes}></subResultList> //make sure this is correct */}
  </main>
);
}; 

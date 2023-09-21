import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DRINK } from "../../models/drink";
import {
  getDrinkOfTheDay,
  searchDrinksByIngredient,
  searchDrinksByName,
} from "../../services/drinkServices";
import { DrinkCard } from "../DrinkCard/DrinkCard";
import { DrinkList } from "../DrinkList/DrinkList";
import { SearchForm } from "../SearchForm/SearchForm";
import "./Main.css";

export const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [drinks, setDrinks] = useState<DRINK[]>([]);
  const [random, setRandom] = useState<DRINK>();
  const [randomisVisible, setRandomIsVisible] = useState(true);

  const updateSearchTerm = (term: string) => {
    setSearchTerm(term);
    searchParams.set("q", term);
    setSearchParams(searchParams);
  };

  function hideRandom() {
    setRandomIsVisible(false);
  }

  useEffect(() => {
    updateSearchTerm(searchParams.get("q") || "");
  }, []);

  useEffect(() => {
    getDrinkOfTheDay().then((response) => {
      setRandom(response.data.drinks[0]);
    });
  }, []);

  useEffect(() => {
    if (searchTerm !== "") {
      searchDrinksByName(searchTerm).then((response) => {
        setDrinks(response.data.drinks);
      });
    }
  }, [searchTerm]);

  return (
    <main className="Main">
      <h2>Search by Drink Name</h2>
      <SearchForm
        currentTerm={searchTerm}
        submit={updateSearchTerm}
        hideRandom={hideRandom}
      ></SearchForm>

      {random && randomisVisible && (
        <div>
          <h2>Drink of the Day</h2>
          <DrinkCard drink={random} />
        </div>
      )}

      <DrinkList drinks={drinks}></DrinkList>
    </main>
  );
};

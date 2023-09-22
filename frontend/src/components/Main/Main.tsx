import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DRINK } from "../../models/drink";
import {
  getDrinkOfTheDay,
  searchDrinksByName,
  searchIngredient,
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
  const [by, setBy] = useState("");
  const [largeCard, setLargeCard] = useState(true);

  const updateSearchTerm = (term: string, by: string) => {
    setSearchTerm(term);
    setBy(by);
    searchParams.set("by", by);
    searchParams.set("q", term);
    setSearchParams(searchParams);
  };

  function hideRandom() {
    setRandomIsVisible(false);
  }

  useEffect(() => {
    updateSearchTerm(searchParams.get("q") || "", searchParams.get("by") || "");
  }, []);

  useEffect(() => {
    getDrinkOfTheDay().then((response) => {
      setRandom(response.data.drinks[0]);
    });
  }, []);

  useEffect(() => {
    if (searchTerm !== "" && by === "name") {
      searchDrinksByName(searchTerm).then((response) => {
        setDrinks(response.data.drinks);
        setLargeCard(false);
      });
    } else if (searchTerm !== "" && by === "ingredient") {
      searchIngredient(searchTerm).then((response) => {
        setDrinks(response.data.drinks);
        setLargeCard(false);
      });
    }
  }, [searchTerm, by]);

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
          <DrinkCard largeCard={largeCard} drink={random} />
        </div>
      )}

      <DrinkList largeCard={largeCard} drinks={drinks}></DrinkList>
    </main>
  );
};

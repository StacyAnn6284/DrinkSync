import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DRINK } from "../../models/drink";
import {
  getDrinkOfTheDay,
  searchDrinksByName,
} from "../../services/drinkServices";
import { DrinkList } from "../DrinkList/DrinkList";
import { SearchForm } from "../SearchForm/SearchForm";
import "./Main.css";

export const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [drinks, setDrinks] = useState<DRINK[]>([]);
  const [random, setRandom] = useState<DRINK>();

  const updateSearchTerm = (term: string) => {
    setSearchTerm(term);
    searchParams.set("q", term);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    updateSearchTerm(searchParams.get("q") || "");
  }, []);

  //not sure on the below
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
    <main>
      <h1>Drink of the Day:</h1>
      <h1>{random ? random.strDrink : "coming soon"}</h1>
      <SearchForm
        currentTerm={searchTerm}
        submit={updateSearchTerm}
      ></SearchForm>
      <DrinkList drinks={drinks}></DrinkList>
    </main>
  );
};

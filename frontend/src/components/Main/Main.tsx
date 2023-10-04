import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getDrinkOfTheDay,
  searchDrinksByIngredient,
  searchDrinksByName,
  searchIngredient,
} from "../../services/drinkServices";
import { DrinkCard } from "../DrinkCard/DrinkCard";
import { DrinkList } from "../DrinkList/DrinkList";
import { SearchForm } from "../SearchForm/SearchForm";
import "./Main.css";
import Header from "../Header/Header";
import { Menu } from "../Menu/Menu";
import NavBar from "../Navigation/NavBar";
import React from "react";
import { DRINK } from "../../Models/drink";

interface MainProps {
  user: any;
}

export const Main = ({ user }: MainProps) => {
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
    if (searchTerm !== "") {
      getDrinkOfTheDay().then((response) => {
        setRandom(response.data.drinks[0]);
      });
    }
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

  useEffect(() => {
    const storedDrink = localStorage.getItem("drinkOfTheDay");
    console.log(storedDrink);
    if (storedDrink) {
      setRandom(JSON.parse(storedDrink));
    } else {
      getDrinkOfTheDay().then((response) => {
        const drinkOfTheDay = response.data.drinks[0];
        setRandom(drinkOfTheDay);

        // Store it in local storage
        localStorage.setItem("drinkOfTheDay", JSON.stringify(drinkOfTheDay));
      });
    }
  }, []);

  function clearLocalStorageAtMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    //if you want to test if it will change after 24hrs
    //change the time (h/m/s/ms)
    midnight.setHours(24, 0, 0, 0);

    // Calculate the time remaining until midnight
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    // Set a timer to clear local storage at midnight
    setTimeout(() => {
      localStorage.removeItem("drinkOfTheDay");
    }, timeUntilMidnight);
  }

  // Call the function to start the timer
  clearLocalStorageAtMidnight();

  return (
    <main className="Main">
      <h2>Search by Drink Name</h2>
      <Menu />
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

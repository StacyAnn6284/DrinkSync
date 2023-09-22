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
    if (searchTerm !== "") {
      searchDrinksByName(searchTerm).then((response) => {
        setDrinks(response.data.drinks);
      });
    }
  }, [searchTerm]);

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

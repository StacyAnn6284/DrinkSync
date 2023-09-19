import axios from "axios";
import { DRINK } from "../models/drink";

export const searchDrinksByName = (term: string) => {
  return axios.get<DRINK>("https://the-cocktail-db.p.rapidapi.com/search.php", {
    params: {
      s: term,
    },
    headers: {
      "X-RapidAPI-Key": 9973533,
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  });
};

export const getDrinkOfTheDay = () => {
  return axios.get<DRINK>("https://the-cocktail-db.p.rapidapi.com/random.php", {
    headers: {
      "X-RapidAPI-Key": 9973533,
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  });
};

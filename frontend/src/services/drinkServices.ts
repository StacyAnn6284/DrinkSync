import axios from "axios";
import { DRINK, DRINKresponse, DRINKSingleRespone } from "../models/drink";

export const searchDrinksByName = (term: string) => {
  return axios.get<DRINKresponse>(
    "https://www.thecocktaildb.com/api/json/v2/9973533/search.php",
    {
      params: {
        s: term,
      },
    }
  );
};

export const getDrinkOfTheDay = () => {
  return axios.get<DRINKSingleRespone>(
    "https://www.thecocktaildb.com/api/json/v2/9973533/random.php"
  );
};

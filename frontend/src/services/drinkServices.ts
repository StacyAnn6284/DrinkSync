import axios from "axios";
import { DRINK, DRINKresponse, DRINKSingleRespone } from "../Models/drink";

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

export const searchIngredient = (term: string) => {
  return axios.get<DRINKresponse>(
    "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php",
    {
      params: {
        i: term,
      },
    }
  );
};

export const searchDrinksByIngredient = (term: string[]) => {
  return axios.get<DRINKresponse>(
    "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php",
    {
      params: {
        i: term,
      },
    }
  );
};

export const getDrinkOfTheDay = () => {
  return axios.get<DRINKSingleRespone>(
    "https://www.thecocktaildb.com/api/json/v2/9973533/random.php"
  );
};

export const getDrinkbyID = (id: string) => {
  return axios.get<DRINKSingleRespone>(
    "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php",
    {
      params: { i: id },
    }
  );
};

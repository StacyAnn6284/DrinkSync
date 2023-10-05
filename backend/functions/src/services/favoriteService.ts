import axios from "axios";
// import * as functions from "firebase-functions";
import { DRINK } from "../Models/drink";

// Getting the GIPHY API key from the firebase functions config (just like our mongo uri)
// const GIPHY_API_KEY = functions.config().giphy.api_key;

// Requests are all the same but this time we're going to point at the GIPHY API endpoints. What we expect back is whatever GIPHY decides to send back.

export const getDrinkById = (id: string) => {
  return axios.get<DRINK>(
    "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php",
    {
      params: { i: id },
    }
  );
};

import axios from "axios";
import { DRINK } from "../models/drink";
import { Favorite } from "../models/favorites";

const BASE_URL = "http://127.0.0.1:5001/drinksync-426f9/us-central1/api";

export const createFavorite = async (uid: string, drink: DRINK) => {
  const response = await axios.post<Favorite>(
    `${BASE_URL}/users/${encodeURIComponent(uid)}/drinks/favorites`,
    drink
  );

  return response.data;
};

export const getFavorites = async (uid: string) => {
  const response = await axios.get<Favorite[]>(
    `${BASE_URL}/users/${encodeURIComponent(uid)}/drinks/favorites`
  );

  return response.data;
};

export const deleteFavorite = async (uid: string, drinkID: string) => {
  const response = await axios.delete(
    `${BASE_URL}/users/${encodeURIComponent(
      uid
    )}/drinks/favorites/${encodeURIComponent(drinkID)}`
  );

  return response.data;
};

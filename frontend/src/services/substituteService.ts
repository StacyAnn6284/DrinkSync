import axios from "axios";
import { subResponse } from "../models/substitute";

export const searchSubstitutes = (term: string) => {
  return axios.get<subResponse>(
    "http://127.0.0.1:5001/drinksync-426f9/us-central1/api/substitutes"
  );
};

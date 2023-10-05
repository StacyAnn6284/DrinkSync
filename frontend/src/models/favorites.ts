import { DRINK } from "./drink";

export interface Favorite {
  _id?: string;
  userId: string;
  drink: DRINK;
}

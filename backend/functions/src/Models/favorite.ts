import { ObjectId } from "mongodb";
import { DRINK } from "./drink";

export default interface favorite {
  _id?: ObjectId;
  userId: string;
  drink: DRINK;
}

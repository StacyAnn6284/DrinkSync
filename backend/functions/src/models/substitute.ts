
import { ObjectId } from "mongodb";

export default interface substitute {
  _id?: ObjectId;
  ingredient: string;
  subIngredient: string;
}

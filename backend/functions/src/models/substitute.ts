import { ObjectId } from "mongodb";

export default interface substitute {
  _id?: ObjectId; //_id field is optional
  ingredient: string;
  subIngredient: string;
}

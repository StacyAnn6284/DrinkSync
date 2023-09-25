import { ObjectId } from "mongodb";

export default interface user {
  _id?: ObjectId;
  username: string;
  email: string;
  password: string;
}

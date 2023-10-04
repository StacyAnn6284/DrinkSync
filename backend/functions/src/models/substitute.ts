// import * as functions from "firebase-functions";
// import express from "express";
// import cors from "cors";
// import userRouter from "../Routers/userRouter";
// import substituteRouter from "../Routers/substituteRouter";
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", userRouter);
// app.use("/", substituteRouter);
// export const api = functions.https.onRequest(app);

import { ObjectId } from "mongodb";

export default interface substitute {
  _id?: ObjectId;
  ingredient: string;
  subIngredient: string;
}

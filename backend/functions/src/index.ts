import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import substituteRouter from "./routes/substituteRouter";
import userRouter from "./routes/userRouter";
import favoriteRouter from "./routes/favoriteRouter";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", substituteRouter);
app.use("/", userRouter);
app.use("/", favoriteRouter);
export const api = functions.https.onRequest(app);

import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import userRouter from "../routes/userRouter";
import substituteRouter from "../routes/substituteRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", userRouter);
app.use("/", substituteRouter);
export const api = functions.https.onRequest(app);

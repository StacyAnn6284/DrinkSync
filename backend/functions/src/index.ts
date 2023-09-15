import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import substituteRouter from "./routes/substituteRouter";
import userRouter from "./routes/userRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", substituteRouter);
app.use("/", userRouter);
export const api = functions.https.onRequest(app);


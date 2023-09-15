import express from "express";
import { getClient } from "../db";
import substitute from "../models/substitute";

const substituteRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

substituteRouter.get("/substitutes", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<substitute>("substitutes").find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});
 export default substituteRouter;
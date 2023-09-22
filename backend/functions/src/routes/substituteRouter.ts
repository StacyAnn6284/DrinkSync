import express from "express";
import { getClient } from "../db";
import substitute from "../Models/substitute";

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

    res.json({ substitutes: results });
  } catch (err) {
    errorResponse(err, res);
  }
});

substituteRouter.post("/substitutes", async (req, res) => {
  try {
    // take new substitute data from the request
    const newSubstitute: substitute = req.body;

    const client = await getClient();
    const result = await client
      .db()
      .collection<substitute>("substitutes")
      .insertOne(newSubstitute);

    if (result.acknowledged) {
      res.status(201).json({
        message: "Substitute created successfully",
        substitute: newSubstitute,
      });
    } else {
      res.status(500).json({ error: "Failed to create the substitute" });
    }
  } catch (err) {
    errorResponse(err, res);
  }
});
export default substituteRouter;

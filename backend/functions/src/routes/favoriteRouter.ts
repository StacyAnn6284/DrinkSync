import express from "express";
import { getClient } from "../db";
import favorite from "../Models/favorite";

const favoriteRouter = express.Router();

favoriteRouter.get("/users/:id/drinks/favorites", async (req, res) => {
  const client = await getClient();
  const userId = req.params.id;
  const result = await client
    .db()
    .collection<favorite>("favorites")
    .find({ userId })
    .toArray();

  if (result.length === 0) {
    res.json([]);
  } else {
    res.json(result);
  }
});

favoriteRouter.post("/users/:id/drinks/favorites", async (req, res) => {
  const client = await getClient();
  const userId = req.params.id;
  const drink = req.body;
  const favorite = { userId, drink };

  const result = await client
    .db()
    .collection<favorite>("favorites")
    .insertOne(favorite);
  res.json({ ...favorite, _id: result.insertedId });
});

favoriteRouter.delete(
  "/users/:id/drinks/favorites/:drinkID",
  async (req, res) => {
    const client = await getClient();
    const userId = req.params.id;
    const drinkId = req.params.drinkID;

    const result = await client
      .db()
      .collection<favorite>("favorites")
      .deleteOne({ userId, "drink.id": drinkId });
    res.json({ deletedCount: result.deletedCount });
  }
);

export default favoriteRouter;

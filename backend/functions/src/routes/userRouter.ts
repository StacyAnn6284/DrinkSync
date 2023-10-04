import express from "express";
import { getClient } from "../db";
// import user from "../Models/user";

const userRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

userRouter.get("/user", async (req, res) => {
  try {
    const client = await getClient();
    // const cursor = client.db().collection<user>("user").find();
    // const results = await cursor.toArray();
    // res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default userRouter;

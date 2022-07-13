import express, { Request, Response } from "express";
import { UserModel } from "../dataBase/user";
import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/betterB");
const database = client.db("insertDB");

const router = express.Router();

router.get("/api/user", async (req: Request, res: Response) => {
  const user = await UserModel.find({});
  return res.status(200).json(user);
});

export { router as userRouter };

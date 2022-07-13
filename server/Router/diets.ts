import express, { Request, Response } from 'express'
import { ReceipeModel } from '../dataBase/diet'
import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://localhost:27017/betterB");
const database = client.db("insertDB");


const router = express.Router()

router.get('/api/diet', async (req: Request, res: Response) => {
  const recipes = await ReceipeModel.find({})
  return res.status(200).send(recipes)
})


export {router as dietRouter}
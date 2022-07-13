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

// const addRecipes = async (req: Request, res: Response)  => {
//     try {
//       const body = req.body.nameReceipe
  
//       const  Ireecipe= new ReceipeModel({
//       description: body.description,
//         status: body.status,
//       })
  
//       const newTodo: ITodo = await todo.save()
//       const allTodos: ITodo[] = await Todo.find()
  
//       res
//         .status(201)
//         .json({ message: "Todo added", todo: newTodo, todos: allTodos })
//     } catch (error) {
//       throw error
//     }
//   }
export {router as dietRouter}
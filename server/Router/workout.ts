import express, { Request, Response } from 'express'
import { WorkoutModel } from '../dataBase/workout'
import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://localhost:27017/betterB");
const database = client.db("insertDB");


const router = express.Router()

router.get('/api/workout', async (req: Request, res: Response) => {
  const recipes = await WorkoutModel.find({})
  return res.status(200).send(recipes)
})

router.post('/workout/post',async(req:Request,res:Response)=>{
    try{
        const{exercise,description,gif}=req.body;
    const workoutId=req.params.workoutid;
    const work=new WorkoutModel({
        exercise,
        description,
        gif,
        workoutId
    });
    const workDoc= await work.save();
    res.send(workDoc)}catch(err){
        res.send(err)
    }
    
})


export {router as workoutRouter}
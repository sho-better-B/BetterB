import express, { Request, Response } from 'express'
import { WorkoutModel } from '../dataBase/workout'
import mongoose from "mongoose";



const router = express.Router()

//get
router.get('/workout', async (req: Request, res: Response) => {
  const recipes = await WorkoutModel.find({})
  return res.status(200).send(recipes)
})

//post
router.post("/workout",async (req: Request, res: Response) => {
    let exercise = req.body.exercise;
    let description=req.body.description;
    let gif=req.body.gif;
    const workout = new WorkoutModel({
      _id: new mongoose.Types.ObjectId(),
      exercise:exercise,
      description:description,
      gif:gif,
    });
    workout
      .save()
      .then((result) => {
        console.log("ya33");
        res.json("jawha behy");
      })
      .catch((error) => {
        console.log(error);
        res.json(error);
      });
  });

  //delete
  router.delete("/workout", (req: Request, res: Response) => {
    const id = req.body._id;
    WorkoutModel.findByIdAndDelete(id)
      .then((result) => {
        console.log("bara zamer");
        res.json(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  //update
  router.put("/workout", (req: Request, res: Response) => {
    const id = req.body._id;
    const exercise = req.body.exercise;
    const description=req.body.description;
    const gif=req.body.gif;    
    WorkoutModel.updateOne(
      { _id: id },
      {
        $set: {
            exercise:exercise,
            description:description,
            gif:gif,        
        }
      }
    )
      .then((result) => {
        res.send(result);
        console.log("ejdid ya REBA7");
      })
      .catch((error) => {
        console.log(error);
      });
  });


export {router as workoutRouter}
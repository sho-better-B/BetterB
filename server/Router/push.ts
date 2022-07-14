import express, { Request, Response } from "express";
import { PushModel } from "../dataBase/push";
import mongoose from "mongoose";

// const client = new MongoClient("mongodb://localhost:27017/betterB");
// const database = client.db("insertDB");

const router = express.Router();

//get
router.get("/push", async (req: Request, res: Response) => {
  const pushs = await PushModel.find({});
  return res.status(200).send(pushs);
});

//post
router.post("/push", async (req: Request, res: Response) => {
  const exercise = req.body.exercise;
  const description = req.body.description;
  const gif = req.body.gif;
  const push = new PushModel({
    _id: new mongoose.Types.ObjectId(),
    exercise: exercise,
    description: description,
    gif: gif,
  });
  push
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
router.delete("/push", (req: Request, res: Response) => {
  const id = req.body._id;
  PushModel.findByIdAndDelete(id)
    .then((result) => {
      console.log("bara zamer");
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

//update
router.put("/push", (req: Request, res: Response) => {
  const id = req.body._id;
  const exercise = req.body.exercise;
  const description = req.body.description;
  const gif = req.body.gif;
  PushModel.updateOne(
    { _id: id },
    {
      $set: {
        exercise: exercise,
        description: description,
        gif: gif,
      },
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

export { router as pushRouter };

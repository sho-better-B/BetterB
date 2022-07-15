import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { ReceipeModel } from "../dataBase/diet";

const router = express.Router();
//read recipies
router.get("/api/diet", async (req: Request, res: Response) => {
  const recipes = await ReceipeModel.find({});
  return res.send(recipes);
});

//add recipes
router.post("/api/diet/add", (req: Request, res: Response) => {
  const nameReceipe = req.body.nameReceipe;
  const images = req.body.image;
  const descriptions = req.body.description;
  const recipe = new ReceipeModel({
    _id: new mongoose.Types.ObjectId(),
    nameReceipe: nameReceipe,
    image: images,
    description:descriptions
  });
  recipe
    .save()
    .then((result) => {
      console.log("yummy " + result.nameReceipe + "'s delecious");
      res.json("new recipe is added successfully");
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});
//delete recipe
router.delete("/api/diet/delete", (req: Request, res: Response) => {
  const id = req.body._id;
  ReceipeModel.findByIdAndDelete(id)
    .then((result) => {
      console.log("omg why did you delete me ");
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
export { router as dietRouter };
//update recipe
router.put("/api/diet/update", (req: Request, res: Response) => {
  const id = req.body._id;
  const nameReceipes = req.body.nameReceipe;
  ReceipeModel.updateOne(
    { _id: id },
    {
      $set: {
        nameReceipe: nameReceipes,
      },
    }
  )
    .then((result) => {
      res.send(result);
      console.log("updated successfully");
    })
    .catch((error) => {
      console.log(error);
    });
});

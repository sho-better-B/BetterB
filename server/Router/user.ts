import express, { Request, Response } from "express";
import { UserModel } from "../dataBase/user";
import mongoose from "mongoose";

// import { MongoClient } from "mongodb";

// const client = new MongoClient("mongodb://localhost:27017/betterB");
// const database = client.db("insertDB");

const router = express.Router();

// get all users
router.get("/api/user", async (req: Request, res: Response) => {
  const user = await UserModel.find({});
  return res.status(200).json(user);
});

// add user
router.post("/api/user/add", (req: Request, res: Response) => {
  const { name, img, email, weight, height, imc, description } = req.body;
  const recipe = new UserModel({
    _id: new mongoose.Types.ObjectId(),
    name,
    img,
    email,
    weight,
    height,
    imc,
    description,
  });
  recipe
    .save()
    .then((result) => {
      console.log("user added successfully");
      res.json(result.name + " is added successfully");
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

// admin can delete user

router.delete("/api/user/delete", (req: Request, res: Response) => {
  const id = req.body._id;
  UserModel.findByIdAndDelete(id)
    .then((result) => {
      console.log("user deleted successfully");
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

// update user profile
router.put("/api/user/update", (req: Request, res: Response) => {
  const id = req.body._id;

  const name = req.body.name;
  const img = req.body.img;
  const email = req.body.email;
  const height = req.body.height;
  const weight = req.body.weight;
  const imc = req.body.imc;
  const description = req.body.description;

  UserModel.updateOne(
    { _id: id },
    {
      $set: {
        name: name,
        img: img,
        email: email,
        height: height,
        weight: weight,
        imc: imc,
        description: description,
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

// get one user // profile user

router.get("/api/user/profile:id", async (req: Request, res: Response) => {
  const id = req.body._id;

  const user = await UserModel.findOne(id);
  return res.status(200).json(user);
});

export { router as userRouter };

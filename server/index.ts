import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";

const app = express();
const Port = 2000;

app.use(json());

//diet
//import diet schema and router
import { dietRouter } from "./Router/diets";

app.use(dietRouter);

//workout
import { workoutRouter } from "./Router/workout";

app.use(workoutRouter);

// user
import { userRouter } from "./Router/user";

app.use(userRouter);

//connect to database
app.get("/", (req, res) => {
  res.send("te5dem");
});

mongoose.connect("mongodb://localhost:27017/betterB", () => {
  console.log("Connected to database...");
});

app.listen(Port, () => {
  console.log("server connected successfully on port " + Port);
});

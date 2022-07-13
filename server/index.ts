import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
const app = express();
const Port = 2000;
//import diet schema and router
import { dietRouter } from "./Router/diets";
import { ReceipeModel } from "./dataBase/diet";
import { userRouter } from "./Router/user";

app.use(json());
app.use(dietRouter);

app.get("/", (req, res) => {
  res.send("te5dem");
});
// user
app.use(userRouter);

//connect to database
mongoose.connect("mongodb://localhost:27017/betterB", () => {
  console.log("Connected to database...");
});

app.listen(Port, () => {
  console.log("server connected successfully on port " + Port);
});

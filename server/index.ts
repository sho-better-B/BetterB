import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express()
const Port= 2000 
 //import diet schema and router
app.use(cors());


app.use(json());

//diet
//import diet schema and router
import { dietRouter } from "./Router/diets";

app.use(dietRouter);


//push
import { pushRouter } from "./Router/push";

app.use(pushRouter);
//pull
import { pullRouter } from "./Router/pull";

app.use(pullRouter);
//legs
import { legsRouter } from "./Router/legs";

app.use(legsRouter);
//core
import { coreRouter } from "./Router/core";

app.use(coreRouter);
// // user
// import { userRouter } from "./Router/user";

// app.use(userRouter);
//signup
import { signupRouter } from "./Router/signup";

app.use(signupRouter);

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

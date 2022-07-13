import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";

const app = express()
const Port= 2000 

app.use(json());

 //import diet schema and router
 import { dietRouter } from "./Router/diets";
 import {ReceipeModel} from "./dataBase/diet"

 //diet
app.use(dietRouter)


app.get("/", (req, res) =>{
    res.send("te5dem")
})
//workout
import { workoutRouter } from "./Router/workout";
import {WorkoutModel} from "./dataBase/workout"

app.use(workoutRouter)

app.get('/workout',(req,res)=>{
    res.send('mriigla')
})
app.post("/workout/post",(req,res)=>{
    res.send('tzeed')
})


// user
app.use(userRouter);




//connect to database
mongoose.connect('mongodb://localhost:27017/betterB',
()=>{
   console.log("Connected to database...")
})





app.listen(Port, () => {
  console.log("server connected successfully on port " + Port);
});

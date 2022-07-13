import  express  from "express";
import {json} from 'body-parser'
import mongoose from "mongoose";
import cors from "cors";
const app = express()
const Port= 2000 
 //import diet schema and router
 import { dietRouter } from "./Router/diets";
app.use(cors());
app.use(json());
app.use(dietRouter)


app.get("/", (req, res) =>{
    res.send("te5dem")
})

//connect to database
mongoose.connect('mongodb://localhost:27017/betterB',()=>{
   console.log("Connected to database...")
})

app.listen(Port,() => {
    console.log("server connected successfully on port " +Port);
})
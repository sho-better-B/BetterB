import express, { Request, Response } from "express";
import { UserModel } from "../dataBase/user";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';


const router = express.Router();
router.post('/api/user/signup', async (req:Request, res:Response) => {
    // const salt:string="saltkey"

        const names =req.body.name;
        const img=req.body.img;
        const email = req.body.email;
        const password = req.body.password;
        
// const passwordee =await bcrypt.hash(passwords,salt)
bcrypt.genSalt(10)
const salt = await bcrypt.genSalt(10);
const newpassword = await bcrypt.hash(password, salt);

const newUser = await new UserModel({
    _id: new mongoose.Types.ObjectId(),
    name:names,
    img:img,
    email:email,
    password: newpassword,
   
})
newUser
.save()
.then((result) => {
  console.log("user added successfully");
  res.json(result.name + " is added successfully");
})
.catch((error) => {
  console.log(error);
  res.json(error);
});
})


export { router as signupRouter };

import express, { Request, Response } from "express";
import { UserModel } from "../dataBase/user";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import IUser from '../dataBase/user'
import console from "console";

const router = express.Router();
// router.post('/api/user/signup', async (req:Request, res:Response) => {
//     // const salt:string="saltkey"

//         const names =req.body.name;
//         const img=req.body.img;
//         const email = req.body.email;
//         const password = req.body.password;
        
// // const passwordee =await bcrypt.hash(passwords,salt)
// bcrypt.genSalt(10)
// const salt = await bcrypt.genSalt(10);
// const newpassword = await bcrypt.hash(password, salt);

// const newUser = await new UserModel({
//     _id: new mongoose.Types.ObjectId(),
//     name:names,
//     img:img,
//     email:email,
//     password: newpassword,
   
// })
// newUser
// .save()
// .then((result) => {
//   console.log("user added successfully");
//   res.json(result.name + " is added successfully");
// })
// .catch((error) => {
//   console.log(error);
//   res.json(error);
// });
// })


router.post('/api/user/login',async (req:Request, res:Response) => {
    try{
const{ id}= req.body._id;
const user=  UserModel.findOne({id})
if (!user) return res.status(401).json({ message: "Email or Password is Wrong!" })

console.log(user)
// const isPasswordValid = await bcrypt.compare(password, user.password)
}catch (err) {
    return res.status(500).json({ message: "Internal Server Error" })
}
})

export { router as signupRouter };

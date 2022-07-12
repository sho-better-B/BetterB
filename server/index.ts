import  express  from "express";
const userProfile  = require('./dataBase/user');
import { connect } from "mongoose";

const app = express()
const Port= 2000 
app.use(express.json());


app.get("/", (req, res) =>{
    res.send("te5dem")
})

//test mongo db
async function run (){
    await connect('mongodb://localhost:27017/betterB')
    const houssem = new userProfile({
        name: 'houssem',
        img:"test.jpg",
        email: 'houssem@gmail.com',
        weight: 100,
        height: 1.78,



    });
    await houssem.save();
    console.log("te5dem");
}
run().catch(err => console.log(err))

app.listen(Port,() => {
    console.log("server connected successfully on port " +Port);
})
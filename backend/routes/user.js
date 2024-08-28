const express = require("express")
const zod = require("zod");
import JWT_SECRET from '../config';
import { User } from '../db';
const jwt = require("jsonwebtoken")
const app = express();
const userSchema = zod.object({
    username  : z.string(),
    password : z.string(),
    firstName : z.string(),
    lastName : z.string()
})
const userRouter = express.Router()

app.post("/signup", async(req,res)  =>{
    const body = req.body;
    const {success} = userSchema.safeParse(req.body);

    if(!success){
        return  res.send(411).json({msg : "Email ALready Taken/ Incorrect Inputs"})
    }
    const exsistingUser = await User.findOne({
        username : req.body.username
    })

    if(exsistingUser){
        return res.status(411).json({msg : "Email already Taken / Incorrect Inputs"})
    }
    const user = await User.createOne({
        username : req.body.username,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    })
    const userId = user._id

    const token = jwt.sign({
        userId
    }, JWT_SECRET)
    
    res.json({
        msg : "useer created successfully",
        token : token
    })
})
const signinBody = zod.object({
    username : zod.string().email(),
    password : zod.string()
})
app.post("/signin", async(req, res)=>{
    const body = req.body;
    const {sucess} = signinBody.safeParse(req.body);
    if(!sucess){
        res.status(411).json({
            msg : "Incorrect id or password"
        })
    }
    const user = await User.findOne({
        username : req.body.username
    })
    if(user){
        const token = jwt.sign({
            userId : user._id
        }, JWT_SECRET)

        res.json({
            token : token
        })
        return
    }
    res.status(411).json({
        msg : "Error while logging in"
    })
})
module.exports = userRouter
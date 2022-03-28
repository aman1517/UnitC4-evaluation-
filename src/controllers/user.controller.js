const express=require("express");
const User=require("../models/usermodel");
const router=express.Router();
router.post(
    body("firstName").trim().not().isEmpty(),
    body("email").isEmail.custom(async (value)=>{
        const User=await User.findOne({email:value});
        if(user){
            throw new Error("enail is already exist");
        }
    })

)
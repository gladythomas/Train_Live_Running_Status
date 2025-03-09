const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../Models/userModel');
const { model } = require('mongoose');
const router =express.Router();

// Create a route for Register

router.post("/register", async (req,res)=>{

    const {fullname,email,password}=req.body;

    const userExist=await User.findOne({email});

    if(userExist) return res.status(400).json({message:"User already Exist"});

    const hashedpassword=await bcrypt.hash(password,10);

    const user =new User ({fullname, email, password:hashedpassword});

    await user.save();

    res.status(201).json({message:" Registered Sucessfully"});


})

module.exports=router;
const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../Models/userModel');
const { model } = require('mongoose');
const router =express.Router();

// Create a route for Register

router.post("/register", async (req,res)=>{

    const {fullName,email,password}=req.body;

    const userExist=await User.findOne({email});

    if(userExist) return res.status(400).json({message:"User already Exist"});

    const hashedpassword=await bcrypt.hash(password,10);

    const user =new User ({fullName, email, password:hashedpassword});

    await user.save();

    res.status(201).json({message:" Registered Sucessfully"});


});

// Creating a route for login

router.post('/login', async (req,res)=>{

    const {email,password}=req.body;

    const user= await User.findOne({email});

    if(!user) return res.status(400).json({message:"user not found"});

    const isMatch= await bcrypt.compare(password,user.password);

    if(!isMatch) return res.status(400).json({message:"Invalid Credentials"});

    const token=jwt.sign({id:user._id}, process.env.JWT_SECRETE, {expiresIn:'1hr'});

    // res.json(token);
    res.json({message:"Login Sucessfull"});


});

module.exports=router;
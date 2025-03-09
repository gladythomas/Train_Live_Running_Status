const mongoose=require('mongoose');

const userSchema =new mongoose.Schema({

    fullname:{
        type:String,
        required:true,
        minlength:[4,'full name should be atleast 4 character long']
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    }


})

module.exports=mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        default:""
    },
    aboutme:{
        type:String,
        default:"Enter about me information"
    }
},{timestamps: true})

const User = mongoose.model("User", userSchema);

module.exports ={User}
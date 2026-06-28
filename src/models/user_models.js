const mongoose=require("mongoose");
const Schems=mongoose.Schema;

const userSchema=new Schema({
    username:{
       type:String,
       unique:[true,"username already taken"],
       required:true,
    },
    email:{
       type:String,
       unique:[true,"Already register"],
       required:true,
    },
    password:{
       type:String,
       required:true,
    }
})

const userModel=mongoose.model("users",userSchema);
module.exports=userModel;
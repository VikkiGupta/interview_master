const express=require("express");
const authRouter=express.Router();
const authController=require("./controllers/auth.controller.js");


authRouter.post("/register",authController.registerUserController);
module.exports=authRouter;
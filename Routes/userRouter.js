const express = require('express');
const userController = require("../Controller/userController");

let userRouter = express.Router();


userRouter.post('/create',userController.create)
userRouter.post('/login',userController.userLogin)


module.exports=userRouter;
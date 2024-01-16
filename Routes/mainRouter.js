const express = require('express');
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
const serviceRouter = require("./serviceRouter");

let mainRouter = express.Router();

mainRouter.use("/user",userRouter);
mainRouter.use("/category",categoryRouter);
mainRouter.use("/service",serviceRouter);

module.exports=mainRouter;
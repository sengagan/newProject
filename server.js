const dotenv = require('dotenv').config();               
const express = require('express');
const fileupload = require('express-fileupload');
const mainRouter = require("./Routes/mainRouter");
var app=express();

const database = require("./database/Connection");

app.use(fileupload());
app.use(express.urlencoded({extended:false}));

app.use("/api",mainRouter);
const port = process.env.PORT || 3005;

app.listen(port,()=>{
    console.log('server start at port: ',port);
})
const userModel = require("../model/userModel");
var jwt = require('jsonwebtoken');

const userService = async (req, res) => {

    let data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password     // we can save password in encrypted form
    }
    console.log("data", data);

    let response = await userModel.userModel(data);
    console.log("response ", response);
    return response;

}

const userLogin = async (req, res) => {
    let data = {
        email: req.body.email,
        password: req.body.password
    }
    console.log("data", data);
    let response = await userModel.userLogin(data); 

    if(data.email == response.email  && data.password == response.password){
        // token is the smallest unit of information, we do not save token 
        const privateKey = "12345"
        // console.log("response", response);
        const token = jwt.sign({ email: response.email, password: response.password }, privateKey)
        // console.log("token ", token);
        return token;
    }else{
        res.status(400).json({"error":"user name or password invalid"});
    }
}

module.exports = { userService, userLogin };
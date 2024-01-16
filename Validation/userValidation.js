const joi = require('joi');

const comman = require("./comman");

const userValidation = async(data)=>{
    let Sechma = joi.object({
        name:joi.string().required(),
        email:joi.string().required(),
        password:joi.string().required()
    })
    let response = await comman.comman(Sechma,data)
    return response;
}

const userLogin = async(details)=>{
    let Sechma = joi.object({
        email:joi.string().required(),
        password:joi.string().required()
    })
    let response = await comman.comman(Sechma,details)
    return response;
}

module.exports={userValidation,userLogin}
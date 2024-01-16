const joi = require('joi');

const comman = require("./comman");

const categoryValidation = async(data)=>{
    let Sechma = joi.object({
        category:joi.string().required(),
    })
    console.log("schema",Sechma);
    let response = await comman.comman(Sechma,data)
    return response;
}

const updateCategory = async(data)=>{
    let Sechma = joi.object({
        category:joi.string().required(),
        id:joi.string().required()
    })
    console.log("schema",Sechma);
    let response = await comman.comman(Sechma,data)
    return response;
}


module.exports={categoryValidation , updateCategory}
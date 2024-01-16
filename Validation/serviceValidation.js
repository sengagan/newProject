const joi = require('joi');

const comman = require("./comman");

const createService = async(data)=>{
    let Sechma = joi.object({
        category_id:joi.string().required(),
        service_name:joi.string().required(),
    })
    console.log("schema",Sechma);
    let response = await comman.comman(Sechma,data)
    return response;
}

const updateService = async(data)=>{
    let Sechma = joi.object({
        category_id:joi.string().required(),
        service_name:joi.string().required(),
        id:joi.string().required()
    })
    // console.log("schema",Sechma);
    let response = await comman.comman(Sechma,data)
    return response;
}


module.exports={createService , updateService}
const userValidation = require('../Validation/userValidation');
const userService = require('../Services/userServices');


const create = async(req,res)=>{
    const  details = req.body;
    console.log("details",details);

    const validate = await userValidation.userValidation(details);
    // console.log("validate",validate);
    if(validate.status == "ERROR"){
        res.status(400).json({"error":validate.message})
    }
    const service = await userService.userService(req,res);
    // console.log("service",service);
    res.status(200).json({"message":"registeration successfully"});
}

const userLogin = async(req,res)=>{
    const  details = req.body;
    console.log("details",details);
    const validate = await userValidation.userLogin(details);
    console.log("validate",validate);
    if(validate.status == "ERROR"){
        res.status(400).json({"error":validate.message})
    }
    const service = await userService.userLogin(req,res);
    console.log("service",service);
    res.status(200).json({"message":"user login","token":service});
}

module.exports={create , userLogin};
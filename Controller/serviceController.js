const serviceValidation = require('../Validation/serviceValidation');
const serviceService = require('../Services/serviceServices');


const createService = async(req,res)=>{
    const  details = req.body;
    console.log("details",details);
    const validate = await serviceValidation.createService(details);
    console.log("validate",validate);
    if(validate.status == "ERROR"){
        res.status(400).json({"error":validate.message})
    }
    const service = await serviceService.createService(details);
    console.log("service",service);
    res.status(200).json({"message":" service created"});
}



const getService = async(req,res)=>{
    const  id = req.params.id;
    console.log("id",id);
    let response = await serviceService.getService(id);
    console.log("response ",response);
    res.status(200).json({ "msg": response });
}

const updateService = async(req,res)=>{
    let data = req.body;
    console.log("data", data);
    let validate = await serviceValidation.updateService(data);
    console.log("validate",validate);
    if (validate.status == "ERROR") {
        res.status(400).json({ "error": validate.message })
    }
    let response = await serviceService.updateService(data);
    // console.log("response",response);
    res.status(200).json({ "msg": "successfully updated" })
}

const deleteService = async(req,res)=>{
    let data = req.params.id;
    console.log("data", data);
    await serviceService.deleteService(data);
    res.status(200).json({ "msg": "deleted" });
}


module.exports={createService , getService , updateService , deleteService };
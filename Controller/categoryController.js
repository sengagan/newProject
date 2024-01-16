const categoryValidation = require('../Validation/categoryValidation');
const categoryService = require('../Services/categoryServices');


const createCategory = async(req,res)=>{
    const  details = req.body;
    console.log("details",details);
    const validate = await categoryValidation.categoryValidation(details);
    // console.log("validate",validate);
    if(validate.status == "ERROR"){
        res.status(400).json({"error":validate.message})
    }
    const service = await categoryService.createCategory(details);
    // console.log("service",service);
    res.status(200).json({"message":" category created"});
}



const getCategory = async(req,res)=>{
    const  id = req.params.id;
    console.log("id",id);
    let response = await categoryService.getCategory(id);
    console.log("response ",response);
    res.status(200).json({ "msg": response });
}

const updateCategory = async(req,res)=>{
    let data = req.body;
    // console.log("data", data);
    let validate = await categoryValidation.updateCategory(data);
    if (validate.status == "ERROR") {
        res.status(400).json({ "error": validate.message })
        return false;
    }
    let response = await categoryService.updateCategory(data);
    // console.log("response",response);
    res.status(200).json({ "msg": "successfully updated" })
}

const deleteCategory = async(req,res)=>{
    let data = req.params.id;
    console.log("data", data);
    await categoryService.deleteCategory(data);
    res.status(200).json({ "msg": "deleted" });
}


module.exports={createCategory , getCategory , updateCategory , deleteCategory };
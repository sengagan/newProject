const serviceModel = require("../model/serviceModel");


const createService = async (details) => {
    let data = {
        category_id: details.category_id,
        service_name: details.service_name,
    }
    console.log("data", data);
    let response = await serviceModel.createService(data);
    // console.log("response ", response);
    return response;

}

const getService = async (data) => {
    let response = await serviceModel.getService(data);
    return response;

}

const updateService = async (data) => {
// console.log("data",data);
    let details = {
        category_id: data.category_id,
        service_name: data.service_name,
        id: data.id
    }
    // console.log("details", details);
    let response = await serviceModel.updateService(details);
    return response;

}

const deleteService = async (data) => {
    let response = await serviceModel.deleteService(data);
    return response;

}

module.exports = { createService,getService,updateService,deleteService };
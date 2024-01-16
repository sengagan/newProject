const categoryModel = require("../model/categoryModel");


const createCategory = async (details) => {
    let data = {
        category: details.category,
    }
    // console.log("data", data);
    let response = await categoryModel.createCategory(data);
    // console.log("response ", response);
    return response;

}

const getCategory = async (data) => {
    let response = await categoryModel.getCategory(data);
    return response;

}

const updateCategory = async (data) => {

    let details = {
        category:data.category,
        id: data.id
    }
    // console.log("details", details);
    let response = await categoryModel.updateCategory(details);
    return response;

}

const deleteCategory = async (data) => {
    let response = await categoryModel.deleteCategory(data);
    return response;

}

module.exports = { createCategory,getCategory,updateCategory,deleteCategory };
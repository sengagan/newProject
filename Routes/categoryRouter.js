const express = require('express');
const categoryController = require("../Controller/categoryController");

let categoryRouter = express.Router();

//category

categoryRouter.post('/create-category',categoryController.createCategory)
categoryRouter.get('/get-category',categoryController.getCategory)
categoryRouter.put('/update-category',categoryController.updateCategory)
categoryRouter.delete('/delete-category/:id',categoryController.deleteCategory)





module.exports=categoryRouter;
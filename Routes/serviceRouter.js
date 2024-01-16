const express = require('express');
const serviceController = require("../Controller/serviceController");

let serviceRouter = express.Router();

//category

serviceRouter.post('/create-service',serviceController.createService)
serviceRouter.get('/get-service/:id',serviceController.getService)
serviceRouter.put('/update-service',serviceController.updateService)
serviceRouter.delete('/delete-service/:id',serviceController.deleteService)


module.exports=serviceRouter;
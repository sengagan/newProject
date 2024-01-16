const { connection } = require("../database/Connection")

const createService = async (data) => {
    console.log("data",data);
    let query = `INSERT INTO service (category_id,service_name) VALUE ('${data.category_id}','${data.service_name}')`;
    return new Promise(await function (resolve, reject) {
        connection.query(query, function (error, result) {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}


const getService = async (data) => {
    console.log("data",data);
    let query = `select * from service where id= '${data}'`;
    return new Promise(await function (resolve, reject) {
        connection.query(query, function (error, result) {
            if (error) {
                reject(error)
            } else {
                console.log("data", result);
                resolve(result)
            }
        })
    })
}

const updateService = async (details) => {
    console.log("detailsss", details);
    let query = `UPDATE service SET service_name='${details.service_name}',category_id='${details.category_id}' WHERE id='${details.id}'`
    return new Promise(await function (resolve, reject) {
        connection.query(query, function (error, result) {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    })
}

const deleteService = async (data) => {
    console.log("data",data);
    let query = `DELETE FROM service WHERE id = '${data}';`
    return new Promise(await function (resolve, reject) {
        connection.query(query, function (error, result) {
            if (error) {
                reject(error)
            } else {
                resolve(result);
            }
        })
    })
}

module.exports={createService ,getService ,updateService , deleteService}
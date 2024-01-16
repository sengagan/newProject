const { connection } = require("../database/Connection")

const createCategory = async (data) => {
    console.log("data",data);
    let query = `INSERT INTO category (category_name) VALUE ('${data.category}')`;
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


const getCategory = async (data) => {
    console.log("data",data);
    let query = `select * from category`;
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

const updateCategory = async (details) => {
    // console.log("detailsss", details);
    let query = `UPDATE category SET category_name='${details.category}' WHERE id='${details.id}'`
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

const deleteCategory = async (data) => {
    console.log("data",data);
    let query = `DELETE FROM category WHERE id = '${data}';`
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

module.exports={createCategory ,getCategory ,updateCategory , deleteCategory}
const { connection } = require("../database/Connection")

const userModel = async (data) => {
    
    let query = `INSERT INTO user (name,email,password) VALUE ('${data.name}','${data.email}','${data.name}')`

    return new Promise(await function (resolve, reject) {
        connection.query(query, function (error, result) {
            if (error) {
                reject(error)
            } else {
                resolve(true)
            }
        })
    })
}

const userLogin = async (data) => {
    let query = `SELECT * FROM user WHERE email='${data.email}'`;
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

module.exports={userModel,userLogin}
const mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '152897',
  database : "codefortommarrow"
});
 
connection.connect(function (error){
    if(error){
        console.log("database connection error",error);
    }else{
        console.log("database connect successfully");
    }
});
module.exports.connection = connection;

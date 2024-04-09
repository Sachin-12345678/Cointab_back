const mysql2=require("mysql2");

const database=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"sachin@123",
    database:"practice1"
});

module.exports=database;
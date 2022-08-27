
require('dotenv').config();

const mysql = require('mysql2');


const con = mysql.createConnection(
    { 
        host:'sql10.freesqldatabase.com',
        user     : 'sql10515509',
        password : process.env.DB_PASSWORD,
        database : 'sql10515509'
    }  
);
 
module.exports = con;
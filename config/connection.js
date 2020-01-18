const mysql = require("mysql");

const connection;
if(processenv.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);

}else{
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "ordertracker_db"
    })
}

connection.connect((err)=>{
    if (err) throw err;
    console.log("DB Connected");
})

module.exports = connection;
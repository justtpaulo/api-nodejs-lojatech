const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "35.199.88.17",
    user: "root",
    password: "root",
    database: "innovatedb",
});

db.connect((err) => {
    if (err) {
        console.error("[ERRO]: Não foi possível estabelecer uma conexão com o banco de dados.", err);
    } else {
        console.log("[AVISO]: Conexão estabelecida com o banco de dados.");
    }
});

module.exports = db;

const mysql2 = require("mysql2");

const db = mysql2.createPool({
    port: "3306",
    host: "127.0.0.1",
    database: "scott",
    user: "root",
    password: "fourleaf0309",
});

module.exports = db;
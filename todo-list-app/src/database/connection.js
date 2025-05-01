const mysql2 = require('mysql2');


const mySqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
}

function executeQuery(query) {
    return new Promise(function (resolve, reject) {
        var connection = mysql2.createConnection(mySqlConfig);
        connection.connect();
        connection.query(query, function (error, results) {
            connection.end();
            if (error) {
                reject(error);
            }
            console.log(results);
            resolve(results);
        });
        connection.on('error', function (error) {
            return ("ERROr NO MySQL SERVER: ", error.sqlMessage);
        });
    });
}

module.exports = executeQuery
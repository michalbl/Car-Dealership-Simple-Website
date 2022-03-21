const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ramblinwrecks',
    multipleStatements: true
});

connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;
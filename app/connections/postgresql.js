const { Client } = require('pg');
const { database } = require('../constants');

var connection = new Client({
    user: database.USER,
    host: database.HOST,
    database: database.DATABASE,
    password: database.PASSWORD,
    port: database.PORT,
})

module.exports = {
    postgresqlConnection: connection
};
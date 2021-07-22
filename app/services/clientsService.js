const { postgresqlConnection } = require('../connections');

exports.getClients = function () {
    return new Promise(function (resolve, reject) {
        postgresqlConnection.query('SELECT id, name, lastname, birthdate FROM clients', function (error, result) {
            if (result) {
                resolve(result.rows);
            }
            if (error) {
                console.log(error.stack);
                reject({
                    codeMessage: error.code ? error.code : 'ER_',
                    message: 'Connection Error'
                })
            }
        })
    })
}

exports.averageAge = function () {
    return new Promise(function (resolve, reject) {
        postgresqlConnection.query('SELECT avg(datediff(birthdate)) from clients', function (error, result) {
            if (result && result.rows.length > 0) {
                resolve(result.rows[0].avg);
            }
            if (error) {
                console.log(error.stack);
                reject({
                    codeMessage: error.code ? error.code : 'ER_',
                    message: 'Connection Error'
                })
            }
        })
    })
}

exports.createClient = function (objClient) {
    return new Promise(function (resolve, reject) {
        if (!objClient || !objClient.name || !objClient.lastname || !objClient.birthdate) {
            reject({
                codeMessage: 'ER_MISSING_FIELDS',
                message: 'Missing fields in body request'
            })
        } else {
            const query = 'INSERT INTO clients(name, lastname, birthdate) VALUES($1, $2, $3) RETURNING *'
            const values = [objClient.name, objClient.lastname, objClient.birthdate]
            postgresqlConnection.query(query, values, function (error, result) {
                if (result) {
                    resolve(result.rows[0]);
                }
                if (error) {
                    console.log(error.stack);
                    reject({
                        codeMessage: error.code ? error.code : 'ER_',
                        message: 'Connection Error'
                    })
                }
            })
        }
    })
}
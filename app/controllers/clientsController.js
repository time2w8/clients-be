const { ClientsService } = require('../services');

exports.getClients = function (req, res) {
    ClientsService.getClients().then(function (result) {
        if (result) {
            return res.status(200).send({
                data: result
            })
        }
    }, function (error) {
        if (error) {
            return res.status(401).send({
                code: error.codeMessage,
                message: error.message
            })
        }
    })
}

exports.averageAge = function (req, res) {
    ClientsService.averageAge().then(function (result) {
        if (result) {
            return res.status(200).send({
                data: result
            })
        }
    }, function (error) {
        if (error) {
            return res.status(401).send({
                code: error.codeMessage,
                message: error.message
            })
        }
    })
}

exports.createClient = function (req, res) {
    ClientsService.createClient(req.body).then(function (result) {
        if (result) {
            return res.status(200).send({
                data: result,
                message: 'Client with id ' + result.id + ' created successfully',
                idPosition: result.id
            })
        }
    }, function (error) {
        if (error) {
            return res.status(401).send({
                code: error.codeMessage,
                message: error.message
            })
        }
    })
}
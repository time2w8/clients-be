var express = require('express');
var router = express.Router();

//Import Client Controller
var { ClientsController } = require('../controllers');

//Import Endpoints Contants
var { endpoints } = require('../constants');

const CLIENTS_URL = endpoints.CLIENTS_URL

//GET CLIENT LIST
router.get(CLIENTS_URL.OPERATIONS.LIST, ClientsController.getClients);

//GET AVERAGE AGE
router.get(CLIENTS_URL.OPERATIONS.AVERAGE, ClientsController.averageAge);

//CREATE NEW CLIENT
router.post(CLIENTS_URL.OPERATIONS.SAVE, ClientsController.createClient);

module.exports = router;

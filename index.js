var express = require('express');
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser');

//PostgreSQL Database Connection
var { postgresqlConnection } = require('./app/connections');

// Parse data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CONSTANTS
var { server, endpoints } = require('./app/constants');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

//ROUTES
var { ClientsRoute } = require('./app/routes');
const APP_ROUTE = endpoints.API_NAME + endpoints.API_VERSION;

//PostgreSQL Database Connection
postgresqlConnection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Connection successfully established with database ' + postgresqlConnection.database);
    app.listen(server.PORT, function () {
        console.log('Server Running on port ' + server.PORT);
    })
});

//FINAL ENDPOINTS
app.use(APP_ROUTE + endpoints.CLIENTS_URL.MAIN, ClientsRoute);


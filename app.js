var express = require('express'),
    mongo = require('mongodb'),
    http = require('http'),
    /*fs = require('fs'),*/
    config = require('./config/config');


    /*var data = require('./config/database')( config );*/

var app = express();

require('./config/express')(app, config);
require('./config/routes')(app);

app.listen(config.port);

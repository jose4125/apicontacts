/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap:{
            deps:[
                'jquery'
            ],
            exports: 'bootstrap'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});

require([
    'backbone',
    'bootstrap',
    'routes/main'
], function (Backbone, bootstrap, Routes) {
    console.log( 'init app' );
    var routes = new Routes();

    Backbone.history.start();
});

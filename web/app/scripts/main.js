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
        },
        vent:{
            deps:[
                'backbone'
            ],
            exports: 'bootstrap'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        vent: '../vendor/vent'
    }
});

require([
    'backbone',
    'bootstrap',
    'routes/main'
], function (Backbone, bootstrap, Routes) {
    console.log( 'init app' );
    var now = new Date().getTime();
    var page_load_time = now - performance.timing.navigationStart;
    console.log("User-perceived page loading time: " + page_load_time);

    var routes = new Routes();

    Backbone.history.start( {pushState: true} );
});

'use strict';

var ENV = {};
ENV.localhost = 'http://api.localhost:3000';

angular.module('apicontactsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ( $urlRouterProvider, $stateProvider ){
    console.log( '[init app]' );
    $stateProvider
      .state( 'home', {
        url: '',
        views: {
          'contactList': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      } )
      .state( 'add', {
        url: '/add',
        views: {
          'contactList': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          },
          'modal': {
            // templateUrl: 'views/add.html',
            templateUrl: 'views/add.html',
            controller: 'AddContactCtrl'
          }
        }
      } );

    $urlRouterProvider.otherwise( '/' );
  });
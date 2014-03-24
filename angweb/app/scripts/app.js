'use strict';

var ENV = {};
ENV.localhost = 'http://api.localhost:3000';

angular.module('apicontactsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ( $urlRouterProvider, $stateProvider, $locationProvider ){
    console.log( '[init app]' );
    $stateProvider
      .state( 'home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      } )
      .state( 'addContact', {
        url: '/addContact',
        templateUrl: 'views/main.html',
        controller: 'AddContactCtrl'
      } )

    $urlRouterProvider.otherwise( '/' );

  })

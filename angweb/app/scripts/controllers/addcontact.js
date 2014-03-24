'use strict';

angular.module('apicontactsApp')
  .controller('AddContactCtrl', function ($scope, $location, $state, Contacts) {
    console.log( '[add controller]');
    $scope.redirect = function(){
      console.log('[redirect]');
      $location.path( '/' ).replace();
      // $state.transitionTo("home");
      $state.go("home");
    }
  });

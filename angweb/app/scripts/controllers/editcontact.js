'use strict';

angular.module('apicontactsApp')
  .controller('EditContactCtrl', function ($scope, $location, $state) {
    console.log( 'edit controller' );
    $scope.redirect = function (){
      console.log('[redirect]');
      $location.path( '/' ).replace();
      // $state.transitionTo("home");
      $state.go("home");
    }
  });

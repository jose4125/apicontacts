'use strict';

angular.module('apicontactsApp')
  .controller('EditContactCtrl', function ($scope, $location, $state, $stateParams, Contacts) {
    console.log( 'edit controller' );
    $scope.contact = Contacts.edit( $stateParams.id );
    console.log( 'contact', $scope.contact );
    $scope.update = function( id ){

    }
    $scope.redirect = function (){
      console.log('[redirect]');
      $location.path( '/' ).replace();
      // $state.transitionTo("home");
      $state.go("home");
    }
  });

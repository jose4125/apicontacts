'use strict';

angular.module('apicontactsApp')
  .controller('EditContactCtrl', function ($scope, $location, $state, $stateParams, Contacts) {
    console.log( 'edit controller' );
    $scope.contact = Contacts.getContact( $stateParams.id );
    console.log( 'contact', $scope.contact );
    $scope.update = function(){
      Contacts.update( $scope.contact, function( res ){
        if( res ){
          $scope.$emit('update-contact');
        }

      } );
    }
    $scope.redirect = function (){
      console.log('[redirect]');
      $location.path( '/' ).replace();
      // $state.transitionTo("home");
      $state.go("home");
    }
  });

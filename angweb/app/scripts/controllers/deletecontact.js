'use strict';

angular.module('apicontactsApp')
  .controller('DeleteContactCtrl', function ($scope, $location, $state, $stateParams, Contacts) {
    console.log( 'delete controller' );
    $scope.contact = Contacts.getContact( $stateParams.id );
    console.log( 'contact', $scope.contact );
    $scope.delete = function(){
      Contacts.remove( $scope.contact, function( res ){
        if( res ){
          $scope.$emit('update-contact');
        }

      } );
    }
    $scope.redirect = function (){
      console.log('[redirect]');
      $location.path( '/' );
      // $state.transitionTo("home");
      // $state.go("home");
    }
  });

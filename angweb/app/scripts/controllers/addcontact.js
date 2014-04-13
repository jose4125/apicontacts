'use strict';

angular.module('apicontactsApp')
  .controller('AddContactCtrl', function ($scope, $location, $state, $timeout, Contacts) {
    console.log( '[add controller]');
    $scope.save = function (){
      console.log( '[contact to add]', $scope.contact);
      Contacts.create( $scope.contact, function( res ){
        console.log('res', res);
        if( res ){
          $scope.$emit('save-contact');
        }
      } );
    }
    $scope.redirect = function (){
      console.log('[redirect]');
      $location.path( '/' );
      // $state.transitionTo("home", {}, {location: 'replace', inherit: true, relative: $state.$current, notify: true});
      // $state.go("home");
    }
  });

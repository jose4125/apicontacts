'use strict';

angular.module('apicontactsApp')
  .controller('MainCtrl', function ( $scope, Contacts ) {
    $scope.contacts = Contacts.all();
    console.log( '[contacts]', $scope.contacts );
  });

'use strict';

angular.module('apicontactsApp')
  .controller('AddContactCtrl', function ($scope, Contacts) {
    $scope.contacts = Contacts.all();
    console.log( '[add controller]');
  });

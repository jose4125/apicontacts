'use strict';

describe('Controller: AddcontactctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('apicontactsApp'));

  var AddcontactctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddcontactctrlCtrl = $controller('AddcontactctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

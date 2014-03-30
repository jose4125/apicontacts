'use strict';

describe('Controller: EditcontactctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('apicontactsApp'));

  var EditcontactctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditcontactctrlCtrl = $controller('EditcontactctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

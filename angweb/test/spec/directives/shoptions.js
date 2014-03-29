'use strict';

describe('Directive: shOptions', function () {

  // load the directive's module
  beforeEach(module('apicontactsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sh-options></sh-options>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the shOptions directive');
  }));
});

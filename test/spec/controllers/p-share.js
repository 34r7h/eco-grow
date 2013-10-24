'use strict';

describe('Controller: PShareCtrl', function () {

  // load the controller's module
  beforeEach(module('EcossentialsApp'));

  var PShareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PShareCtrl = $controller('PShareCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

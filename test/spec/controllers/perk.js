'use strict';

describe('Controller: PerkCtrl', function () {

  // load the controller's module
  beforeEach(module('EcossentialsApp'));

  var PerkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerkCtrl = $controller('PerkCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

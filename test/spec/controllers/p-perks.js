'use strict';

describe('Controller: PPerksCtrl', function () {

  // load the controller's module
  beforeEach(module('EcossentialsApp'));

  var PPerksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PPerksCtrl = $controller('PPerksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

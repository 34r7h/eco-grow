'use strict';

describe('Controller: GrowCtrl', function () {

  // load the controller's module
  beforeEach(module('EcossentialsApp'));

  var GrowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GrowCtrl = $controller('GrowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

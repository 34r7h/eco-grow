'use strict';

describe('Controller: PVideoCtrl', function () {

  // load the controller's module
  beforeEach(module('EcossentialsApp'));

  var PVideoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PVideoCtrl = $controller('PVideoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

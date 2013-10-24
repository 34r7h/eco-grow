'use strict';

describe('Controller: PStreamCtrl', function () {

  // load the controller's module
  beforeEach(module('EcossentialsApp'));

  var PStreamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PStreamCtrl = $controller('PStreamCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

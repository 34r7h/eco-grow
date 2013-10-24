'use strict';

describe('Controller: PFundersCtrl', function () {

  // load the controller's module
  beforeEach(module('EcossentialsApp'));

  var PFundersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PFundersCtrl = $controller('PFundersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

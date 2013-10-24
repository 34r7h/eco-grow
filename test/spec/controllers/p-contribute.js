'use strict';

describe('Controller: PContributeCtrl', function () {

  // load the controller's module
  beforeEach(module('EcossentialsApp'));

  var PContributeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PContributeCtrl = $controller('PContributeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

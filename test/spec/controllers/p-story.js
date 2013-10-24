'use strict';

describe('Controller: PStoryCtrl', function () {

  // load the controller's module
  beforeEach(module('EcossentialsApp'));

  var PStoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PStoryCtrl = $controller('PStoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

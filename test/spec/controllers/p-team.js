'use strict';

describe('Controller: PTeamCtrl', function () {

  // load the controller's module
  beforeEach(module('EcossentialsApp'));

  var PTeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PTeamCtrl = $controller('PTeamCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: PCommentsCtrl', function () {

  // load the controller's module
  beforeEach(module('EcossentialsApp'));

  var PCommentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PCommentsCtrl = $controller('PCommentsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

angular.module('EcossentialsApp')
  .controller('ListCtrl', function ($scope, Project) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.projects = Project.query();

  });

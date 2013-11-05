'use strict';

angular.module('EcossentialsApp')
  .controller('FooterCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.beHereNow = new Date().getTime();

  });

'use strict';

angular.module('EcossentialsApp')
  .controller('PVideoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   
    var teaUrl = new Firebase("https://ecogrow.firebaseio.com/video");
    angularFire(vidUrl, $scope, "video");


  });

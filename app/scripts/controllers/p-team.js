'use strict';

angular.module('EcossentialsApp')
  .controller('PTeamCtrl', function ($scope, angularFire) {

  	var teaUrl = new Firebase("https://eco-grow.firebaseio.com/team");
    angularFire(teaUrl, $scope, "team");

    
  });

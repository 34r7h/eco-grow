'use strict';

angular.module('EcossentialsApp')
  .controller('PTeamCtrl', function ($scope, angularFire) {

  	var teaUrl = new Firebase("https://ecogrow.firebaseio.com/team");
    angularFire(teaUrl, $scope, "team");

    
  });

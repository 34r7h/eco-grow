'use strict';

angular.module('EcossentialsApp')
  .controller('PContributeCtrl', function ($scope, angularFire) {


    var conUrl = new Firebase("https://ecogrow.firebaseio.com/fund");
    angularFire(conUrl, $scope, "fund");
	
	$scope.percentage = (conUrl.raised/conUrl.goal);
    
  });

'use strict';

angular.module('EcossentialsApp')
  .controller('PContributeCtrl', function ($scope, angularFire) {


  	var totalRaised = 109412,
  	winning = 120000,
  	daysLeft = 60;

    var conUrl = new Firebase("https://eco-grow.firebaseio.com/fund");
    angularFire(conUrl, $scope, "fund");

    
  });

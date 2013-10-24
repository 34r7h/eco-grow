'use strict';

angular.module('EcossentialsApp')
  .controller('PContributeCtrl', function ($scope) {
  	var totalRaised = 0,
  	winning = 120000,
  	daysLeft = 60;


    $scope.fund = {
    	raised: totalRaised,
    	goal: winning,
    	timeLeft:daysLeft,
    	buttonText:"Contribute"
    }
  });

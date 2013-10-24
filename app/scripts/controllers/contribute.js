'use strict';

angular.module('EcossentialsApp')
  .controller('ContributeCtrl', function ($scope) {
  	var totalRaised = 0,
  	winning = 120000;
  	daysLeft = 60;


    $scope.fund = {
    	raised: $scope.totalRaised,
    	goal: winning,
    	timeLeft:daysLeft,
    	buttonText:"Contribute"
    }
  });

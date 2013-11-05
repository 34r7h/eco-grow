'use strict';

angular.module('EcossentialsApp')
  .controller('PPerksCtrl', function ($scope, angularFire) {
  	
  	var perUrl = new Firebase("https://eco-grow.firebaseio.com/perks");
 	angularFire(perUrl, $scope, "perks");
  });

'use strict';

angular.module('EcossentialsApp')
  .controller('PShareCtrl', function ($scope, angularFire) {

    var shaUrl = new Firebase("https://eco-grow.firebaseio.com/share");
    angularFire(shaUrl, $scope, "share");
    

	
  });

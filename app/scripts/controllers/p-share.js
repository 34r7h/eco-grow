'use strict';

angular.module('EcossentialsApp')
  .controller('PShareCtrl', function ($scope, angularFire) {

    var shaUrl = new Firebase("https://ecogrow.firebaseio.com/share");
    angularFire(shaUrl, $scope, "share");
    

	
  });

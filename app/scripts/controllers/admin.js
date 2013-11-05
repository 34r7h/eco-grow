'use strict';

angular.module('EcossentialsApp')
  .controller('AdminCtrl', function ($scope, angularFire) {
    
    var perUrl = new Firebase("https://eco-grow.firebaseio.com/perks");
    angularFire(perUrl, $scope, "perks");

   

  });

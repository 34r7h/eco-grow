'use strict';

angular.module('EcossentialsApp')
    .controller('PStoryCtrl', function ($scope, angularFire) {
   
        var supUrl = new Firebase("https://eco-grow.firebaseio.com/suppliers");
        angularFire(supUrl, $scope, "suppliers");

        var newUrl = new Firebase("https://eco-grow.firebaseio.com/newItems");
        angularFire(newUrl, $scope, "newItems");

        var budUrl = new Firebase("https://eco-grow.firebaseio.com/budget");
        angularFire(budUrl, $scope, "budget");
        
    
  });

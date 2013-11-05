'use strict';

angular.module('EcossentialsApp')
  .controller('PStreamCtrl', function ($scope, angularFire) {

    var strUrl = new Firebase("https://eco-grow.firebaseio.com/streams");
    angularFire(strUrl, $scope, "streams");
    
  });

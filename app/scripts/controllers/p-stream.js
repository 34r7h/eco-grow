'use strict';

angular.module('EcossentialsApp')
  .controller('PStreamCtrl', function ($scope, angularFire) {

    var strUrl = new Firebase("https://ecogrow.firebaseio.com/streams");
    angularFire(strUrl, $scope, "streams");
    
  });

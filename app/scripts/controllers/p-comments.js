'use strict';

angular.module('EcossentialsApp')
  .controller('PCommentsCtrl', function ($scope) {
    $scope.comments = [
    	{name:"anonymous", msg:"Good Luck and keep it up!", time:[2013,10,16,9,30]},
    	{name:"Melissa", msg:"I love myself", time:[2013,10,16,9,30]},
    ]
  });

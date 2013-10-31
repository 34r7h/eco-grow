'use strict';

angular.module('EcossentialsApp')
  .controller('PShareCtrl', function ($scope) {
    $scope.share = [
    	{name:"Facebook", url:"http://facebook.com/share", icon:"facebook"},
    	{name:"Twitter", url:"http://twitter.com/share", icon:"twitter"},
    	{name:"Google", url:"http://google.com/share", icon:"google-plus"},
    	
    ];
  });

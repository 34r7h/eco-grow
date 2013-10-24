'use strict';

angular.module('EcossentialsApp')
  .controller('PShareCtrl', function ($scope) {
    $scope.share = [
    	{name:"Facebook", url:"http://facebook.com/share"},
    	{name:"Twitter", url:"http://twitter.com/share"},
    	{name:"Google", url:"http://google.com/share"},
    	
    ];
  });

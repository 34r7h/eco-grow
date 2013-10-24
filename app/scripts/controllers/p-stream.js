'use strict';

angular.module('EcossentialsApp')
  .controller('PStreamCtrl', function ($scope) {
    
    $scope.streams = [
    	{
    		name: 'Irth Orbits',
    		type: 'comments',
    		content: 'Hooray!',
    		time: [2013,10,18,13,12]
    	}, 
    	{
    		name: 'Melissa',
    		type: 'contributes',
    		content: '$500',
    		time: [2013,10,18,13,12]
    	} 
    ];
  });

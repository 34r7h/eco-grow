'use strict';

angular.module('EcossentialsApp')
  .controller('CreateCtrl', function ($scope, $location, Project) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.save = function() {
    	Project.save($scope.project, function(project) {
      		$location.path('/edit/' + project._id.$oid);
    	});
  	}
  });

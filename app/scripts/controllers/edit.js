'use strict';

angular.module('EcossentialsApp')
  .controller('EditCtrl', function ($scope, $location, $routeParams, Project) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var self = this;
 
	Project.get({id: $routeParams.projectId}, function(project) {
	    self.original = project;
	    $scope.project = new Project(self.original);
	});
	 
	$scope.isClean = function() {
	    return angular.equals(self.original, $scope.project);
	}
	 
	$scope.destroy = function() {
	    self.original.destroy(function() {
	      $location.path('/list');
	    });
	};
	 
	$scope.save = function() {
	    $scope.project.update(function() {
	      $location.path('/list');
	    });
	};
  });

'use strict';

angular.module('EcossentialsApp')
  .controller('AdminCtrl', function ($scope, Project, $location, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.projects = Project.query();
    $scope.save = function() {
    	Project.save($scope.project, function(project) {
      		$location.path('/edit/' + project._id.$oid);
    	});
  	}

  $scope.self = this;
 
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

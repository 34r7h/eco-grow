'use strict';

angular.module('EcossentialsApp')
  .controller('PTeamCtrl', function ($scope) {
    $scope.team = [
    	{name:'Melissa Call', position:'Boss', imgUrl:'http://yeoman.io/assets/img/yeoman-logo.png'},
    	{name:'Irth', position:'Doofy Webber', imgUrl:'http://yeoman.io/assets/img/yeoman-logo.png'}
    ];
  });

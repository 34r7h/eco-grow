'use strict';

angular.module('EcossentialsApp')
  .controller('PFundersCtrl', function ($scope) {
       $scope.funders = [
      {name:'anonymous', contributed:500, time:[2013,10,15,16,20], email:'irth03@gmail.com'},
      {name:'Melissa Call', contributed:2500, time:[2014,10,15,16,20], email:'irth@live.com'}
    ];
    
  });

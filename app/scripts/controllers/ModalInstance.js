'use strict';

angular.module('EcossentialsApp')
  .controller('ModalinstanceCtrl', function ($scope, $ModalInstance, items) {
    $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  });

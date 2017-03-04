
var hilary = angular.module('hilary', []);
hilary.controller('Operaciones', function($scope) {
$scope.precio = 500
$scope.iva = 0.12
$scope.precio = $scope.precio
  $scope.iva = $scope.precio * $scope.iva;
}); 
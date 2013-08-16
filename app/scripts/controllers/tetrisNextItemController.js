angular.module('ngTetrisApp')
.controller('tetrisNextItemController', function($scope, nextPieceService){
  $scope.initialize = function(nCols, nRows){
    modelService.initialize(nCols, nRows);
  }
});
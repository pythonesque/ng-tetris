'use strict';

angular.module('ngTetrisApp')
.directive('tetris', [function(){
  return {
    templateUrl: 'views/tetris_grid.html',
    link: function(scope, attr, element){
      console.log('I am in your directive pwnzing your guys');
    }
  }

}]);
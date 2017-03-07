var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  
  $scope.check2 = function(){
      console.debug('xvcxvcxv')
  }
});

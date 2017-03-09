var app = angular.module('myApp', []);

app.controller('MainCtrl', function ($scope) {
    $scope.name = 'World';

    $scope.check2 = function () {
        console.debug('xvcxvcxv')
    }

    $scope.$watch('valueD', function (newVal, oldVal) {
        if (newVal == undefined) {
            $scope.valueD = oldVal;
        }
    });

});

app.filter('isEmpty', [function () {
    return function (object) {
        return angular.equals({}, object);
    }
}])
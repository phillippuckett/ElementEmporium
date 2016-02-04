angular.module('eCommerce')
    .controller('registrationController', ['$scope', '$state', 'auth', function ($scope, $state, $window, auth) {
        console.log('Registration View');
        $scope.user = {};
        $scope.register = function () {
            auth.register($scope.user)
                .error(function (error) { $scope.error = error; })
                .then(function () { $state.go('home'); });
        };
    }]);
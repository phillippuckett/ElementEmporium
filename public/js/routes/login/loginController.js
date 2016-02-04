angular.module('eCommerce')
    .controller('loginController', ['$scope', '$state', 'auth', function ($scope, $state, $window, auth) {
        console.log("Login View");   
        $scope.user = {};
        $scope.login = function () {
            auth.login($scope.user).error(function (error) {
                $scope.error = error;
            }).then(function () {
                $state.go('home');
            });
        };
    }])
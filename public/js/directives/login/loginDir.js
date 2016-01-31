angular.module('eCommerce')
    .directive('login', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/login/loginTmpl.html',
            controller: function ($scope, $window, $state) {
                console.log("loginCtrl Running");
                $scope.header = 'Login';
            }
        };

    });
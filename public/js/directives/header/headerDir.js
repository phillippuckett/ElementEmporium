angular.module('eCommerce')
    .directive('headerDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/header/headerTmpl.html',
            controller: function ($scope) {
                console.log("Header");
            }
        }
    });
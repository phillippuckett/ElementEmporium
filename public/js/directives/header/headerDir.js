angular.module('eCommerce')
    .directive('headerDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/header/headerTmpl.html',
            controller: function ($scope, auth) {
                console.log("Header");
                var Logout = function () {
                    auth.logout();
                }
                /** if login = false, ng-show the buttons login, register. */
                /** if login = true, ng-show the buttons logout, account, cart. */
                $scope.login = false;
                $scope.toggle = function () {
                    $scope.login = !$scope.login;
                    console.log("Toggled");
                }
            },
        }
    });
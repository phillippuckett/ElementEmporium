angular.module('eCommerce')
    .directive('headerDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/header/headerTmpl.html',
            controller: function ($scope, auth) {
                console.log("Header");
                /** if login = false, ng-false the buttons login, register. */
                /** if login = true, ng-show the buttons logout, account, cart. */
                var Logout = function () {
                    auth.logout();
                }
            }
        }
    });
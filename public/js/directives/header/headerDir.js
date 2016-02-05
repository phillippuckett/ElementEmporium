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
                var loggedIn = false;
                var toggle = function () {
                    loggedIn = !loggedIn;
                };// toggle();
            }
        }
    });

angular.module('eCommerce')
    .directive('headerDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/header/headerTmpl.html',
            controller: function ($scope, auth) {
                console.log("Header");
                
                // LOGINTOGGLE
                auth.subscribe(function() {
                    console.log('header logged in');
                    $scope.loggedIn = true;
                })
                var Logout = function () { auth.logout(); }
                
                
            }
        }
    });

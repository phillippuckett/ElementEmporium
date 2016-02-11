/** Header */
angular.module('eCommerce')
    .directive('headerDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/header.html',
            controller: function ($scope, auth) {
                console.log("Header");
                
                /** Toggle */
                auth.subscribe(function () {
                    console.log('header logged in');
                    $scope.loggedIn = true;
                })
                var Logout = function () { auth.logout(); }


            }
        }
    });

/** Footer */
angular.module('eCommerce')
    .directive('footerDir', function () {
        console.log('phillippuckett88');
        return {
            restrict: 'E',
            templateUrl: 'app/directives/footer.html',
            controller: function ($scope) {
                console.log("Footer");
                var currentDate = new Date().getFullYear();
                $scope.date = currentDate.toString();
            }
        }
    });
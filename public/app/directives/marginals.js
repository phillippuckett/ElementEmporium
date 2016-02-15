/** Header */
angular.module('eCommerce')
    .directive('headerDirective', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/header.html',
            controller: function ($scope, authService, productService) {
                // console.log("Header");
                $scope.productSearch = function (productName) {
            productService.searchProduct(productName);
            console.log('Product Searched: ', productName);
        }
                            
                /** Toggle */
                authService.subscribe(function () {
                    console.log('header logged in');
                    $scope.loggedIn = true;
                })
                var Logout = function () { authService.logout(); }
            }
        }
    });

/** Footer */
angular.module('eCommerce')
    .directive('footerDirective', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/footer.html',
            controller: function ($scope) {
                // console.log("Footer");
                
                var currentDate = new Date().getFullYear();
                $scope.date = currentDate.toString();
            }
        }
    });
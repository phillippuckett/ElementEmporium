angular.module('eCommerce')
    .controller('headerController', function ($scope) {
        $scope.productSearch = function (productName) {
            console.log(productName);
        }
    });
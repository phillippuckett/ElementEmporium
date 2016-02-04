angular.module('eCommerce')
    .controller('productHunter', function ($scope, productService) {
        $scope.productSearch = function (productName) {
            console.log(productName);
            productService.searchProduct(productName);
        }
    });
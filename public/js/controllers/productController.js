angular.module('eCommerce')
    .controller('productController', function ($scope, productService) {
       
        $scope.productSearch = function (productName) {
            console.log(productName);
            productService.searchProduct(productName);
        }
    });
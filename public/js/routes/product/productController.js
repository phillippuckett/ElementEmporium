angular.module('eCommerce')
    .controller('productController', function ($scope, productService) {
        $scope.productSearch = function (productName) {
            console.log('Product View');
            productService.searchProduct(productName);
        }
    });
angular.module('eCommerce')
    .controller('productController', function ($scope, productService, orderService) {

        $scope.productSearch = function (productName) {
            productService.searchProduct(productName);
        }
    });
angular.module('eCommerce')
    .service('productService', function ($http, $q) {
        this.searchProduct = function (productName) {
            $http.get('/api/product?title=' + productName).then(function (product) {
                console.log(product);
            });
        }
    });
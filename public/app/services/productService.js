angular.module('eCommerce')
    .service('productService', function ($http) {
        /* GET and  */
        this.searchProduct = function (productName) {
            return $http.get('/api/product?title=' + productName).then(function (product) {
                // console.log(product);
            })
            console.log('Function: searchProduct');
        };
        /* GET and return this Data for this specific Product */
        this.getProduct = function () {
            return $http.get('/api/product').then(function (getProResult) {
                // console.log(getProResult);
                return getProResult.data;
            })
            console.log('Function: getProduct');
        };
    });
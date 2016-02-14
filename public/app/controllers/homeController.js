angular.module('eCommerce')
    .controller('homeController', function ($scope, productService, orderService, authService) {
        // console.log("Home View");
        productService.getProduct().then(function (result) {
            console.log('', result);
            /** we're setting the result that came back from the product service to $scope.products (the ng-repeat) */
            $scope.products = result;
        })      
        /** did they already have an open order, how would we check? */
        $scope.getUnfinishedOrder = function () {
            console.log('authService', authService);
            var uId = authService.getCurrentUser();
            orderService.getUnfinishedOrder(uId).then(function (resultOrder) {
                console.log(resultOrder);
                if (resultOrder.length === 0) {
                    orderService.createOrder(authService.getCurrentUser()).then(function (newOrder) {
                        console.log(newOrder)
                        $scope.orderId = newOrder._id;
                        /** this holds the new id that came back */                   
                    })
                } else {
                    $scope.orderId = resultOrder[0]._id;
                }
            })
        };
        $scope.getUnfinishedOrder();
        
        /** Pushing the Order to the DB */
        $scope.addProductToOrder = function (productId) {
            orderService.pushProductToOrder($scope.orderId, productId).then(function (updatedOrder) {
                console.log(updatedOrder);
                $scope.getUnfinishedOrder();
            })
        }
    });
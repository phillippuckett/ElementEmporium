angular.module('eCommerce')
    .controller('orderController', function ($scope, authService, orderService) {
        // console.log('Order View');
              
        /** connects UserData with the orderView */
        authService.getCurrentUserObject().then(function (currentUserResult) {
            $scope.user = currentUserResult.data;
            console.log($scope.user);
        });
        
        $scope.getUnfinishedOrder = function () {
            orderService.getUnfinishedOrder(authService.getCurrentUser()).then(function (resultOrder) {
                console.log('this is our order', resultOrder);
                $scope.orderId = resultOrder[0];
                // if (resultOrder.length === 0) {
                //     orderService.createOrder(authService.getCurrentUser()).then(function (newOrder) {
                //         console.log('This is the submitted order', newOrder)
                //         $scope.orderId = newOrder;
                //         /** this holds the new id that came back */                   
                //     })
                // } else {
                //     $scope.orderId = resultOrder[0]._id;
                // }
            })
        };
        $scope.getUnfinishedOrder();
    });
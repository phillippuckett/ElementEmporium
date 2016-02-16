angular.module('eCommerce')
    .controller('orderController', function ($scope, authService, orderService, historyService) {
        // console.log('Order View');
              
        /** Connects UserData with the orderView */
        authService.getCurrentUserObject().then(function (currentUserResult) {
            $scope.user = currentUserResult.data;
            console.log($scope.user);
        });
        /** Connects a UserObject with an OrderObject */
        $scope.getUnfinishedOrder = function () {
            orderService
                .getUnfinishedOrder(authService.getCurrentUser())
                .then(function (resultOrder) {
                    if (resultOrder.length === 0) {
                        orderService
                            .createOrder(authService.getCurrentUser()).then(function (newOrder) {
                                console.log('This is the submitted order', newOrder)
                                $scope.orderId = newOrder;
                                /** this holds the new id that came back */
                            })
                    } else {
                        $scope.orderId = resultOrder[0]._id;
                    }
                    var consolidatedProducts = [
                        {
                            title: 'Carbon',
                            counter: 0,
                            id: '56bbe31bbf73ef8df29acbf0',
                            price: function () {
                                return this.counter * 1.99;
                            }
                        },
                        {
                            title: 'Hydrogen',
                            counter: 0,
                            id: '56bbe467bf73ef8df29acbf1',
                            price: function () {
                                return this.counter * 1.99;
                            }
                        },
                        {
                            title: 'Oxygen',
                            counter: 0,
                            id: '56bbe526bf73ef8df29acbf3',
                            price: function () {
                                return this.counter * 1.99;
                            }
                        },
                        {
                            title: 'Nitrogen',
                            counter: 0,
                            id: '56bbe5a1bf73ef8df29acbf4',
                            price: function () {
                                return this.counter * 1.99;
                            }
                        },

                        {
                            title: 'Phosphorus',
                            counter: 0,
                            id: '56bbe66abf73ef8df29acbf5',
                            price: function () {
                                return this.counter * 1.99;
                            }
                        },
                        {
                            title: 'Sulfur',
                            counter: 0,
                            id: '56bbe6c1bf73ef8df29acbf6',
                            price: function () {
                                return this.counter * 1.99;
                            }
                        }
                    ];
                    /** Increases a specific products amount, on the 'counter'*/
                    var productList = resultOrder[0].product;
                    productList.forEach(function (productId) {
                        consolidatedProducts.forEach(function (atom) {
                            if (atom.id === productId) {
                                atom.counter++;
                            }
                        })
                    });
                    console.log("Product List", consolidatedProducts);
                    /** Adds the prices of every 'counter' to produce a "total"" */
                    $scope.totalPrice = function () {
                        var total = 0;
                        consolidatedProducts.forEach(function (atom) {
                            total = total + atom.price();
                        })
                        /** Rounds the "total" to the nearest tenth */
                        var displayTotal = total.toFixed(2);
                        return displayTotal;
                    };                   
                    // console.log('Current Order: ', resultOrder);
                    // $scope.orderId = resultOrder[0];
                    $scope.consolidatedProducts = consolidatedProducts;
                })
        };
        $scope.getUnfinishedOrder();
        
        /** Creating an OrderObject from UserObject */
        $scope.finalizeOrder = function () {
            historyService
                .createHistory($scope.orderId)
                .then(function (result) {
                    $scope.orderArray = result.order;
                })
        },
        /** Get Order History onto the View */
        $scope.getHistory = function () {
            historyService.getHistory()
                .then(function () {

                })
        }
    });
   
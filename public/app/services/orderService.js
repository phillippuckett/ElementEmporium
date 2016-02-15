angular.module('eCommerce')
    .service('orderService', function ($http) { 
               
        /** Check for existing order */
        this.getUnfinishedOrder = function (userId) {
            // console.log(userId);
            return $http
                .get('/api/order/' + userId)
                .then(function (resultOrder) {
                    // console.log(resultOrder);
                    return resultOrder.data;
                })
            console.log('Function: getUnfinishedOrder');
        };
        
        /** Create order inside of the database */
        this.createOrder = function (_id) {
            return $http
                .post('/api/order', { user: _id })
                .then(function (orderCreated) {
                    // console.log(result);
                    return orderCreated.data;
                })
            console.log('Function: createOrder');
        };
        /** Push product into 'Order.product[]' */
        this.pushProductToOrder = function (orderId, productId) {
            return $http
                .put('/api/order/' + orderId, { productId: productId })
                .then(function (orderPushed) {
                    // console.log('Order Pushed', orderPushed.data);
                    return orderPushed.data;
                })
            console.log('Function: pushProductToOrder');
        };
    });
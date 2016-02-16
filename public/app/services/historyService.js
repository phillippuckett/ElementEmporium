angular.module('eCommerce')
    .service('historyService', function ($http) {      
        /** Create User Order History */
        this.createHistory = function (orderIdPar) {
            //    console.log(orderId);
            return $http
                .post('/api/history', { orderId: orderIdPar })
                .then(function (result) {
                    return result.data;
                })
        } 
        /** Get Data from User Order History */
        this.getHistory = function () {
            // console.log(historyId);
            return $http
                .get('/api/history')
                .then(function (resultOrderHistory) {
                    // console.log(resultOrderHistory);
                    return resultOrderHistory.data;
                })
                console.log('Function: getHistory');
        };
    });
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
        this.getHistory = function (userHistory) {
            return $http
                .get('/api/history' + userHistory)
                .then(function (resultOrderHistory) {
                    return resultOrderHistory.data;
                })
        }
    });
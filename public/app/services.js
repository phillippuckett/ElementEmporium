/** Authentication Service */
angular.module('eCommerce')
    .factory('auth', ['$state', '$http', '$window', function ($state, $http, $window) {
        var auth = {};
        var loggedIn = false;      
        // what is the user Id?
        var currentUserId;
        auth.getCurrentUser = function () {
            return currentUserId;
        };
        
        /** Register */
        auth.register = function (user) {
            return $http({
                method: 'POST',
                url: '/api/register',
                data: user
            }).then(function (data) {
                console.log(data);
                if (data) {
                    loggedIn = true;
                    notifyObserver();
                }
                $state.go('login');
                return data.data;
            })
        };
        
        /** Log In */
        // var localStorageKey = 'sessionKey';
        
        auth.login = function (user) {
            console.log('SENDING: ', user);
            return $http.post('/api/login', user).then(function (data) {
                console.log(data);
                // check in authFactory
                currentUserId = data.data;
                if (data) {
                    loggedIn = true;
                    notifyObserver();
                }
                $state.go('home');
            })
        };
        
        /** Log Out */
        auth.logout = function () {
            return $http({
                method: 'GET',
                url: '/api/logout'
            }).then(function () {
                console.log('logged out');
                $state.go('home');
            });
        };
        
        /** Toggle */
        auth.isLoggedIn = function () {
            return loggedIn;
        }
        var notifyObserver;
        auth.subscribe = function (callback) {
            notifyObserver = callback;
        };
        return auth;
    }]); 
    
/** Order Service*/
angular.module('eCommerce')
    .service('orderService', function ($http) {        
        /** Check for existing order */
        this.getUnfinishedOrder = function (userId) {
            return $http.get('api/order/' + userId).then(function (resultOrder) {
                console.log(resultOrder);
                return resultOrder.data;
            })
        }
        /** Create order */
        this.createOrder = function (_id) {
            return $http.post('api/order', { user: _id }).then(function (result) {
                console.log(result);
                return result.data;
            })
        }
    });
   
/** Product Service */
angular.module('eCommerce')
    .service('productService', function ($http) {
        this.searchProduct = function (productName) {
            return $http.get('/api/product?title=' + productName).then(function (product) {
                console.log(product);
            })
        };
        this.getProduct = function () {
            return $http.get('/api/product').then(function (getProResult) {
                console.log(getProResult);
                return getProResult.data;
            })
        };
    }); 
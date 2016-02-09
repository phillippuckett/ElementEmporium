/** Authentication Service */
angular.module('eCommerce')
    .factory('auth', ['$state', '$http', '$window', function ($state, $http, $window) {
        var auth = {};
        var loggedIn = false;

        auth.getCurrentUser = function () {
            return $http.get('/api/currentUser')
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
        auth.login = function (user) {
            console.log('SENDING: ', user);
            return $http.post('/api/login', user).then(function (data) {
                console.log(data);
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
    
/** Product Service */
angular.module('eCommerce')
    .service('productService', function ($http, $q) {
        this.searchProduct = function (productName) {
            $http.get('/api/product?title=' + productName).then(function (product) {
                console.log(product);
            });
        }
    }); 
   
/** Cart Service */    
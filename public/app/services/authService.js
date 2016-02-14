/** Authentication Service */
angular.module('eCommerce')
    .service('authService', function ($state, $http, $window) {
        var auth = {};
        var loggedIn = false;
        var currentUserId;
        
        /** Get User ID */
        this.getCurrentUser = function () {
            return currentUserId;
            console.log('Function: getCurrentUSer');
        };      
        /** Get Current User */
        this.getCurrentUserObject = function () {
            return $http.get('/api/currentUser').then(function (currentUser) {
                return currentUser;
            })
            console.log('Function: getCurrentUserObject');
        };
        /** Registration */
        this.register = function (user) {
            return $http.post('/api/register', user).then(function (data) {
                // console.log(data);
                if (data) {
                    loggedIn = true;
                    notifyObserver();
                }
                $state.go('login');
                return data.data;
            })
            console.log('Function: register');
        };    
        
        /** Log In */
        this.login = function (user) {
            console.log('SENDING: ', user);
            return $http.post('/api/login', user).then(function (data) {
                /* check in authService */
                currentUserId = data.data;
                if (data) {
                    loggedIn = true;
                    notifyObserver();
                }
                $state.go('home');
            })
            console.log('Function: login');
        };
        
        /** Log Out */
        this.logout = function () {
            return $http.get('/api/logout').then(function () {
                $state.go('home');
            });
            console.log('Function: logout');
        };
        
        /** Toggle */
        this.isLoggedIn = function () {
            return loggedIn;
        };
        var notifyObserver;
        this.subscribe = function (callback) {
            notifyObserver = callback;
        };
        console.log('Function: toggle');
    });
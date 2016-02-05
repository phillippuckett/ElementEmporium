/** Authentication */
angular.module('eCommerce')
    .factory('auth', ['$state', '$http', '$window', function ($state, $http, $window) {
        var auth = {};

        auth.isLoggedIn = function () {
            return $http.get('/api/currentUser')
        };

        auth.register = function (user) {
            return $http({
                method: 'POST',
                url: '/api/register',
                data: user
            }).then(function (data) {
                return data.data;
            })
            // .then(function (user) {
            //     return $http.post('/api/login', user).then(function (data) {
            //         $state.go('account');
            //     })
            // })
        };

        auth.login = function (user) {
            console.log('SENDING: ', user);
            return $http.post('/api/login', user).then(function (data) {
                $state.go('account');
            })
        };

        auth.logout = function () {
            return $http({
                method: 'GET',
                url: '/api/logout'
            }).then(function () {
                $state.go('home');
                console.log('logged out');
            });
        };
        return auth;
    }]);
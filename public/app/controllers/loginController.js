angular.module('eCommerce')
    .controller('loginController', function ($scope, $state, authService) {
        $scope.user = {};
        
        /* remove this object before launching the app */
        $scope.user = {
            username: 'phillippuckett88',
            password: 'phillippuckett88'
        }

        $scope.login = function () {
            authService.login($scope.user).then(function () {
                $state.go('home');
            }).catch(function (err) {
                if (err.status === 401) {
                    alert('Invalid Login');
                } else {
                    console.error(err);
                }
            });
        };
    });
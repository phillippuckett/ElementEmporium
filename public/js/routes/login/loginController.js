angular.module('eCommerce')
    .controller('loginController', ['$scope', '$state', 'auth', function ($scope, $state, auth) {
        console.log("Login View");   
        $scope.user = {};
        $scope.login = function () {
            auth.login($scope.user).then(function () {
                $state.go('home');
            }).catch(function(err) {
                if(err.status === 401) {
                    alert('Invalid Login');
                } else {
                    console.error(err);
                }
            });
        };
    }])
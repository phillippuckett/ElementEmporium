angular.module('eCommerce')
    .controller('loginController', ['$scope', '$state', 'auth', function ($scope, $state, auth) {
        console.log("Login View");   
        $scope.user = {};
        $scope.login = function () {
            auth.login($scope.user).then(function () {
                $state.go('account');
            }).catch(function(err) {
                if(err.status === 401) {
                    alert('wrong');
                } else {
                    console.error(err);
                }
            });
        };
    }])
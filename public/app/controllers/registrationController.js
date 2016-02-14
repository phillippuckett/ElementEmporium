angular.module('eCommerce')
    .controller('registrationController', function ($scope, $state, $window, authService) {
        // console.log('Registration View');
        
        $scope.user = {};
        // console.log($scope.user);
        
        $scope.register = function () {
            authService.register($scope.user)
                .catch(function (err) {
                    console.error('Registration Error', err);
                    if (err.data.code === 11000) {
                        alert('Failed to register; user may already exist');
                    }
                    $scope.error = err;
                })
        };
    });
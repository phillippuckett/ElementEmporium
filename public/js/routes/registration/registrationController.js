angular.module('eCommerce')
    .controller('registrationController', ['$scope', '$state', '$window', 'auth', function ($scope, $state, $window, auth) {
        console.log('Registration View');
        $scope.user = {};
        console.log($scope.user);
        $scope.register = function () {
            auth.register($scope.user)
                .catch(function (err) {
                    console.error('Registration Error', err);
                    if(err.data.code === 11000) {
                        alert('User May Already Exist');
                    }
                    $scope.error = err;
                })
        };
    }]);
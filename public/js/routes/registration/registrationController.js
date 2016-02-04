angular.module('eCommerce')
    .controller('registrationController', ['$scope', '$state', '$window', 'auth', function ($scope, $state, $window, auth) {
        console.log('Registration View');
        $scope.user = {};
        $scope.register = function () {
            auth.register($scope.user)
                .catch(function (err) { 
                    console.error('Register Error', err);
                    if(err.data.code === 11000) {
                        alert('User already exists');
                    }
                    $scope.error = err; 
                })
                .then(function () { $state.go('home'); });
        };
    }]);
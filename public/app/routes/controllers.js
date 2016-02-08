/** Account */
angular
    .module('eCommerce')
    .controller('accountController', function ($scope, auth) {
        console.log("Account View");
        $scope.username = 'name';
        $scope.email = 'email';

        $scope.apt = 'apt';
        $scope.street = 'street';
        $scope.city = 'city';
        $scope.state = 'state';
        $scope.zip = 'zip';
        $scope.country = 'country';

        $scope.cardHolder = 'cardHolder';
        $scope.lastFourdigitsOfCard = '0000';
        $scope.mm = 'mm';
        $scope.yyyy = 'yyyy';
        $scope.cardCompany = 'cardCompany';
        console.log(auth);
        auth.getCurrentUser().then(function (result) {
            console.log(result);
            $scope.username = result.data.username;
        });
    });   
    
/** Cart */
/*angular.module('eCommerce')
    .controller('cartController', function ($scope) {
        console.log("Cart View");
    });*/  
     
/** Home */
angular.module('eCommerce')
    .controller('homeController', function ($scope) {
        console.log("Home View");
    });
    
/** Inventory */
angular.module('eCommerce')
    .controller('inventoryController', function ($scope) {
        console.log('Inventory View');
    });
    
/** Login */
angular.module('eCommerce')
    .controller('loginController', ['$scope', '$state', 'auth', function ($scope, $state, auth) {
        console.log("Login View");
        $scope.user = {};
        $scope.login = function () {
            auth.login($scope.user).then(function () {
                $state.go('home');
            }).catch(function (err) {
                if (err.status === 401) {
                    alert('Invalid Login');
                } else {
                    console.error(err);
                }
            });
        };
    }]);
    
/** Orders */
angular.module('eCommerce')
    .controller('orderController', function ($scope) {
        console.log('Order View');
    });
    
/** Product Hunter */
angular.module('eCommerce')
    .controller('productHunter', function ($scope, productService) {
        $scope.productSearch = function (productName) {
            console.log(productName);
            productService.searchProduct(productName);
        }
    });  
     
/** Products */
// angular.module('eCommerce')
//     .controller('productsController', function ($scope, productService) {
//             console.log('Product View');
//     });

/** Registration */
angular.module('eCommerce')
    .controller('registrationController', ['$scope', '$state', '$window', 'auth', function ($scope, $state, $window, auth) {
        console.log('Registration View');
        $scope.user = {};
        console.log($scope.user);
        $scope.register = function () {
            auth.register($scope.user)
                .catch(function (err) {
                    console.error('Registration Error', err);
                    if (err.data.code === 11000) {
                        alert('User May Already Exist');
                    }
                    $scope.error = err;
                })
        };
    }]);
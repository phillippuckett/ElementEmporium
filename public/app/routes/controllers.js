/** Account */
// angular
//     .module('eCommerce')
//     .controller('accountController', function ($scope, user, auth) {
//         console.log("Account View");               
//         $scope.user = user;  
//         // console.log(auth);
//         auth.getCurrentUser().then(function (result) {
//             console.log(result);
//             $scope.user = result.data; // connects data with the accountView
//         });
//     });   
    
/** Cart */
/*angular
    .module('eCommerce')
    .controller('cartController', function ($scope) {
        console.log("Cart View");
    });*/  
     
/** Home */
angular
    .module('eCommerce')
    .controller('homeController', function ($scope, productService) {
        console.log("Home View");
        productService.getProduct().then(function (result) {
            console.log(result);
            // we're setting the result that came back from the product service to $scope.products (the ng-repeat)
            $scope.products = result;
        })
    });
    
/** Inventory */
angular
    .module('eCommerce')
    .controller('inventoryController', function ($scope) {
        console.log('Inventory View');
    });
    
/** Login */
angular
    .module('eCommerce')
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
    
/** Order */
angular
    .module('eCommerce')
    .controller('orderController', function ($scope, user, auth) {
        console.log('Order View');
        $scope.user = user;  
        console.log(auth);
        auth.getCurrentUser().then(function (result) {
            $scope.user = result.data; // connects data with the orderView
            console.log(result.data);
        });
    });  
    
/** Product Hunter */
angular
    .module('eCommerce')
    .controller('productHunter', function ($scope, productService) {
        $scope.productSearch = function (productName) {
            console.log(productName);
            productService.searchProduct(productName);
        }
    });
     
/** Product *//** the scrapped 'productView' */
// angular
//    .module('eCommerce')
//    .controller('productController', function ($scope, productService) {
//             console.log('Product View');
//     });

/** Registration */
angular
    .module('eCommerce')
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
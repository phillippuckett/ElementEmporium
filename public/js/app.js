angular.module('eCommerce', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'js/routes/home/homeTmpl.html',
                controller: 'homeController'
            })
        /** Not Logged In */
            .state('login', {
                url: '/login',
                templateUrl: 'js/routes/login/loginTmpl.html',
                controller: 'loginController',
            })
            .state('registration', {
                url: '/registration',
                templateUrl: 'js/routes/registration/registrationTmpl.html',
                controller: 'registrationController',
            })
        /** Logged In */
            .state('account', {
                url: '/account',
                templateUrl: 'js/routes/account/accountTmpl.html',
                controller: 'accountController',
            })
        /*.state('cart', {
            url: '/cart',
            templateUrl: 'js/routes/cart/cartTmpl.html',
            controller: 'cartController'
        })*/
        /** Hidden Routes */
            .state('products', {
                url: '/products',
                templateUrl: 'js/routes/products/productsTmpl.html',
                controller: 'productsController'
            })
            .state('orders', {
                url: '/orders',
                templateUrl: 'js/routes/orders/orderTmpl.html',
                controller: 'orderController'
            })
            .state('inventory', {
                url: '/inventory',
                templateUrl: 'js/routes/inventory/inventoryTmpl.html',
                controller: 'inventoryController'
            })
        $urlRouterProvider.otherwise('home');
    });
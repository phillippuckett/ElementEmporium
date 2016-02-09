angular.module('eCommerce', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/routes/homeView.html',
                controller: 'homeController'
            })
        /** Not Logged In */
            .state('login', {
                url: '/login',
                templateUrl: 'app/routes/loginView.html',
                controller: 'loginController',
            })
            .state('registration', {
                url: '/registration',
                templateUrl: 'app/routes/registrationView.html',
                controller: 'registrationController',
            })
        /** Logged In */
            .state('account', {
                url: '/account',
                templateUrl: 'app/routes/accountView.html',
                controller: 'accountController',
            })
        /*.state('cart', {
            url: '/cart',
            templateUrl: 'app/routes/cartView.html',
            controller: 'cartController'
        })*/
        /** Hidden Routes */
            .state('order', {
                url: '/order',
                templateUrl: 'app/routes/orderView.html',
                controller: 'orderController'
            })
            .state('inventory', {
                url: '/inventory',
                templateUrl: 'app/routes/inventoryView.html',
                controller: 'inventoryController'
            })
        $urlRouterProvider.otherwise('home');
    });
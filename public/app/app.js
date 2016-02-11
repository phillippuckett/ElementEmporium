angular.module('eCommerce', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/routes/homeView.html',
                controller: 'homeController',
            })
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
            .state('order', {
                url: '/order',
                templateUrl: 'app/routes/orderView.html',
                controller: 'orderController',
                resolve: {
                    user: function (auth, $state) {
                        return auth.getCurrentUser().then(function (response) {
                            if (response.status != 200) {
                                $state.go('login')
                            }
                            return response.data;
                        })
                    }
                }
            })
            .state('inventory', {
                url: '/inventory',
                templateUrl: 'app/routes/inventoryView.html',
                controller: 'inventoryController',
                resolve: {
                    user: function (auth, $state) {
                        return auth.getCurrentUser().then(function (response) {
                            if (response.status != 200) {
                                $state.go('login')
                            }
                            return response.data;
                        })
                    }
                }
            })
        $urlRouterProvider.otherwise('home');
    });
    
        // .state('account', {
        //     url: '/account',
        //     templateUrl: 'app/routes/accountView.html',
        //     controller: 'accountController',
        //     resolve: {
        //         user: function (auth, $state) {
        //             return auth.getCurrentUser().then(function (response) {
        //                 if (response.status != 200) {
        //                     $state.go('login')
        //                 }
        //                 return response.data;
        //             })
        //         }
        //     }
        // })
        // .state('cart', {
        //     url: '/cart',
        //     templateUrl: 'app/routes/cartView.html',
        //     controller: 'cartController'
        // })
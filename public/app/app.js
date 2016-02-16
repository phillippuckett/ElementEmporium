angular.module('eCommerce', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/views/homeView.html',
                controller: 'homeController',
                resolve: {
                    user: function (authService, $state) {
                        return authService.getCurrentUserObject().then(function (response) {
                            if (response.status != 200) {
                                $state.go('login')
                            }
                            console.log(response);
                            return response.data;
                        })
                        console.log('Resolve in "order"');
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/views/loginView.html',
                controller: 'loginController',
            })
            .state('registration', {
                url: '/registration',
                templateUrl: 'app/views/registrationView.html',
                controller: 'registrationController',
            })
            .state('order', {
                url: '/order',
                templateUrl: 'app/views/orderView.html',
                controller: 'orderController',
                resolve: {
                    user: function (authService, $state) {
                        return authService.getCurrentUserObject().then(function (response) {
                            if (response.status != 200) {
                                $state.go('login')
                            }
                            console.log(response);
                            return response.data;
                        })
                        console.log('Resolve in "order"');
                    }
                }
            })
        $urlRouterProvider.otherwise('home');
    });
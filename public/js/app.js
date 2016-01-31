angular.module('eCommerce', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'js/routes/home/homeTmpl.html',
                controller: 'homeController'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: 'js/routes/cart/cartTmpl.html',
                controller: 'cartController'
            })
        $urlRouterProvider.otherwise('/home');
    });
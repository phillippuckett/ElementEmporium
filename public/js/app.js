angular.module('eCommerce', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'js/routes/home/homeTmpl.html',
                controller: 'homeController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'js/routes/login/loginTmpl.html',
                controller: 'loginController'
            })
            .state('signUp', {
                url: '/signUp',
                templateUrl: 'js/routes/signUp/signUpTmpl.html',
                controller: 'signUpController'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: 'js/routes/cart/cartTmpl.html',
                controller: 'cartController'
            })
            .state('account', {
                url: '/account',
                templateUrl: 'js/routes/account/accountTmpl.html',
                controller: 'accountController'
            })
            .state('logout', {
                url: '/logout',
                templateUrl: 'js/routes/logout/logoutTmpl.html',
                controller: 'logoutController'
            })
        $urlRouterProvider.otherwise('/home');
    });
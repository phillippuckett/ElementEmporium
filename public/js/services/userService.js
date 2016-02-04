/** Dependencies */
var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var passport = require('passport');

/** GET home page. */
router.get('/home', function (req, res) {
    res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var User = mongoose.model('User');
var auth = jwt({ secret: 'SECRET', userProperty: 'payload' });

/** creates a user given a username and password */
router.post('/register', function (req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Please fill out all fields' });
    }
    var user = new User();
    user.username = req.body.username;
    user.setPassword(req.body.password)
    user.save(function (err) {
        if (err) { return next(err); }
        return res.json({ token: user.generateJWT() })
    });
});

/** authenticates the user and returns a token to the client */
router.post('/login', function (req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Please fill out all fields' });
    }
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err); }
        if (user) { return res.json({ token: user.generateJWT() }); }
        else { return res.status(401).json(info); }
    })(req, res, next);
});

/** Authentication */
angular.module('eCommerce')
    .factory('authentication', ['$http', '$window', function ($http, $window) {
        var authentication = {};
        authentication.saveToken = function (token) {
            $window.localStorage['token-key'] = token;
        };

        authentication.getToken = function () {
            return $window.localStorage['token-key'];
        };

        authentication.isLoggedIn = function () {
            var token = authentication.getToken();
            if (token) {
                var payLoad = JSON.parse($window.atob(token.split('.')[1]));
                return payLoad.exp > Date.now() / 1000;
            }
            else { return false; }
        };

        authentication.currentUser = function () {
            if (authentication.isLoggedIn) {
                var token = authentication.getToken();
                var payLoad = JSON.parse($window.atob(token.split('.')[1]));
                return payLoad.username;
            }
        };

        authentication.register = function (user) {
            return $http.post('/registration', user).success(function (data) {
                authentication.saveToken(data.token);
            })
        };

        authentication.login = function (user) {
            return $http.post('/login', user).success(function (data) {
                authentication.saveToken(data.token);
            })
        };
        authentication.logout = function () {
            $window.localStorage.removeItem('token-key');
        };
        return authentication;
    }]);
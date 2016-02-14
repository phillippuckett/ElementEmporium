/** Dependants */
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');

/** Controllers */
var productCtrl = require('./server/controllers/productCtrl');
var userCtrl = require('./server/controllers/userCtrl');
var orderCtrl = require('./server/controllers/orderCtrl');

/** Services */
var passport = require('./server/services/passport');

/** Config */
var config = require('./config');

/** Express */
var app = express();

/** Policies */
var isAuthed = function (req, res, next) {
    if (!req.isAuthenticated()) return res.status(401).send();
    return next();
    console.log('Function: isAuthed');
};

/** Application */
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: config.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

/** Log In */
app.post('/api/login', function (req, res, next) {
    console.log('Running Function: login');
    next();
},
    passport.authenticate('local'), function (req, res) {
        res.send(req.user._id);
        console.log('Function: authenticate');
    });
/** Log Out */
app.get('/api/logout', function (req, res, next) {
    req.logout();
    return res.redirect('/#/home');
    console.log('Running Function: logout');
});
/** Product End Points */
app.post('/api/product', function (req, res, next) { next(); console.log('Running Function: createProduct'); }, productCtrl.createProduct);
app.get('/api/product', productCtrl.readProduct);
app.put('/api/product', productCtrl.updateProduct);
// app.get('/api/product/:productId', productCtrl.currentProductResult);
app.delete('/api/product/:id', productCtrl.deleteProduct);
/** User End Points */
app.post('/api/register', userCtrl.register);
app.get('/api/user', userCtrl.readUser);
app.get('/api/currentUser', userCtrl.currentUser);
app.put('/api/user', userCtrl.updateUser);
app.delete('/api/user/:id', userCtrl.deleteUser);
/** Order End Points */
app.post('/api/order', orderCtrl.createOrder);
app.get('/api/order', orderCtrl.readOrder);
app.get('/api/order/:userId', orderCtrl.getUnfinishedOrder);
app.put('/api/order/:orderId', orderCtrl.pushProductToOrder);

/** Connections */
var nodePort = 3000;
app.listen(nodePort, function () {
    console.log('Running nodemon://localhost:' + nodePort);
});

var mongoURI = 'mongodb://localhost:27017/eCommerce'
mongoose.connect(mongoURI);
mongoose.connection.once('open', function (err) {
    if (err) { throw err; }
    else { console.log('Running ' + mongoURI); }
});

/** Webpage for help with Mongo Database */
/* mongodb.org/manual/reference/operator... */
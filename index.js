/** Dependants */
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');

/** Controllers */
var productsCtrl = require('./server/controllers/productsCtrl');
var userCtrl = require('./server/controllers/usersCtrl');
var orderCtrl = require('./server/controllers/orderCtrl');
// var cartCtrl = require('./server/controllers/cartCtrl');

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
    console.log('RUNNING LOGIN');
    next();
},
    passport.authenticate('local'), function (req, res) {
        res.send(req.user.username);
    });
/** Log Out */
app.get('/api/logout', function (req, res, next) {
    req.logout();
    // return res.status(200).send('Successfully Logged Out, but good luck getting past this! Mwahahaha...');
    return res.redirect('/#/home');
});

/** Product End Points */
app.post('/api/product', function (req, res, next) { console.log('RUNNING'); next(); }, productsCtrl.createProduct);
app.get('/api/product', productsCtrl.readProduct);
app.put('/api/product', productsCtrl.updateProduct);
app.delete('/api/product/:id', productsCtrl.deleteProduct);
/** User End Points */
app.post('/api/register', userCtrl.register);
app.get('/api/user', userCtrl.readUser);
app.get('/api/currentUser', userCtrl.currentUser);
app.put('/api/user', userCtrl.updateUser);
app.delete('/api/user/:id', userCtrl.deleteUser);
/** Order End Points */
app.post('/api/order', orderCtrl.createOrder);
app.get('/api/order', orderCtrl.readOrder);
/** Cart End Points */
// app.post('/api/cart', cartCtrl.createOrder);
// app.put('/api/cart', cartCtrl.removeFromCart); 

/** Connections */
var nodePort = 3000;
app.listen(nodePort, function () {
    console.log('Running nodemon://localhost:' + nodePort);
});

var mongoURI = 'mongodb://localhost:27017/products'
mongoose.connect(mongoURI);
mongoose.connection.once('open', function (err) {
    if (err) { throw err; }
    else { console.log('Running ' + mongoURI); }
});

/** Webpage for help with Mongo Database */
/* mongodb.org/manual/reference/operator... */
/** Require */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var cors = require('cors');

/** Application */
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

/** Controllers */
var productsCtrl = require('./server/controllers/productsCtrl');
var usersCtrl = require('./server/controllers/usersCtrl');
var orderCtrl = require('./server/controllers/orderCtrl');
var cartCtrl = require('./server/controllers/cartCtrl');

/** Product End Points */
app.post('/api/product', productsCtrl.createProduct);
app.get('/api/product', productsCtrl.readProduct);
app.put('/api/product', productsCtrl.updateProduct);
app.delete('/api/product/:id', productsCtrl.deleteProduct);
/** User End Points */
app.post('/api/user', usersCtrl.createUser);
app.get('/api/user', usersCtrl.readUser);
app.put('/api/user', usersCtrl.updateUser);
app.delete('/api/user/:id', usersCtrl.deleteUser);
/** Order End Points */
app.post('/api/order', orderCtrl.createOrder);
app.get('/api/order', orderCtrl.readOrder);
/** Cart End Points */
app.post('/api/cart', cartCtrl.createOrder);
app.put('/api/cart', cartCtrl.removeFromCart); 

/** Ports and Channels */
var nodePort = 3000;
app.listen(nodePort, function () {
    console.log('Node Port : ' + nodePort);
});

var mongoUri = 'mongodb://localhost:27017/products'
mongoose.connect(mongoUri);
mongoose.connection.once('open', function (err) {
    if (err) { throw err; }
    else { console.log("Mongo Database : " + mongoUri); }
});

/** Webpage for help with Mongo Database */
/* mongodb.org/manual/reference/operator... */
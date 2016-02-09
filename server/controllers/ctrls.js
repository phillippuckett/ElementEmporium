// /** Cart *//** Cart *//** Cart *//** Cart *//** Cart *//** Cart */
// /** Cart *//** Cart *//** Cart *//** Cart *//** Cart *//** Cart */
// /** Cart *//** Cart *//** Cart *//** Cart *//** Cart *//** Cart */
// /*var Order = require('./../models/order');

// module.exports = {

//     addToCart: function (req, res, next) {
//         Order.create(req.body, function (err, addToCart) {
//             if (err) { res.status(500).send(err); }
//             else {
//                 Order.cart.push(req.query.productId);
//                 Order.save(function () {
//                     Order.findById(req.params.userId).populate('cart')
//                         .exec(function (err, addToCart) {
//                             res.status(200).send(addToCart.cart);
//                         })
//                 })
//             }
//         })
//     },

//     createOrder: function (req, res, next) {
//         Order.create(req.body, function (err, createOrder) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send(createOrder); }
//         })
//     },

//     removeFromCart: function (req, res, next) {
//         Order.findById(req.params.userId, function (err, removeFromCart) {
//             if (err) { res.status(500).send(err); }
//             else {
//                 for (var i = User.cart.length - 1; i >= 0; i--) {
//                     var currentProduct = User.cart[i];
//                     if (currentProduct == req.query.productId) {
//                         User.cart.splice(i, 1);
//                         break;
//                     }
//                 }
//                 User.save(function () {
//                     User.findById(req.params.userId).populate('cart')
//                         .exec(function (err, user) {
//                             if (err) { res.status(500).send(err); }
//                             else { res.status(200).send(user.cart); }
//                         })
//                 })
//             }
//         })
//     },
// }; */

// /** Order *//** Order *//** Order *//** Order *//** Order *//** Order */
// /** Order *//** Order *//** Order *//** Order *//** Order *//** Order */
// /** Order *//** Order *//** Order *//** Order *//** Order *//** Order */
// var Order = require('./../models/order');

// module.exports = {
//     /** C */
//     createOrder: function (req, res, next) {
//         new Order(req.body).populate('user._id', 'user.name').save(function (err, createOrder) {
//             if (err) { res.status(500).send(err); }
//             else { res.send(createOrder); }
//         })
//     },
//     /** R */
//     readOrder: function (req, res, next) {
//         Order.find(req.query).populate('user').exec(function (err, readOrder) {
//             if (err) { res.status(500).send(err); }
//             else { res.send(readOrder); }
//         })
//     },
// };

// /** Product *//** Product *//** Product *//** Product *//** Product *//** Product */
// /** Product *//** Product *//** Product *//** Product *//** Product *//** Product */
// /** Product *//** Product *//** Product *//** Product *//** Product *//** Product */
// var Product = require('./../models/product');


// module.exports = {
//     /** C */
//     createProduct: function (req, res, next) {
//         new Product(req.body).save(function (err, createProduct) {
//             if (err) { res.status(500).send(err); }
//             else { res.send(createProduct); }
//         })
//     },
//     /** R */
//     readProduct: function (req, res) {
//         console.log("Searching for: " + req.query.title)
//         Product.find({ title: new RegExp(req.query.title, "i") }).exec(function (err, readProduct) {
//             if (err) { res.status(500).send(err); }
//             else { res.send(readProduct); }
//         })
//     },
//     /** U */
//     updateProduct: function (req, res, next) {
//         Product.findByIdAndUpdate(req.query.id), { $set: req.body }, function (err, updateProduct) {
//             if (err) { res.status(500).send(err); }
//             else { res.send(updateProduct); }
//         }
//     },
//     /** D */
//     deleteProduct: function (req, res, next) {
//         Product.findByIdAndRemove(req.query.id, function (err, deleteProduct) {
//             if (err) { res.status(500).send(err); }
//             else { res.send(deleteProduct); }
//         })
//     }
// };

// /** User *//** User *//** User *//** User *//** User *//** User */
// /** User *//** User *//** User *//** User *//** User *//** User */
// /** User *//** User *//** User *//** User *//** User *//** User */
// var User = require('./../models/user');

// module.exports = {
//     /** C *//** https://github.com/dallincrane/example-local-auth */
//     register: function (req, res, next) {
//         console.log('Creating New User');

//         User.create(req.body, function (err, registerUser) {
//             if (err) {
//                 console.error(err);
//                 console.log('user exists');
//                 return res.status(500).json(err);
//             }
//             res.status(200).json(registerUser);
//         })
//     },
//     /** R */
//     readUser: function (req, res, next) {
//         User.find.populate('cart').exec().then(function (err, readUser) {
//             if (err) { res.status(500).send(err); }
//             else { res.status(200).send(readUser); }
//         })
//     },
//     /** https://github.com/dallincrane/example-local-auth */
//     currentUser: function (req, res, next) {
//         if (!req.user) return res.status(401).send('current user not defined');
//         req.user.password = null;
//         return res.status(200).json(req.user);
//     },
//     /** U */
//     updateUser: function (req, res, next) {
//         User.findByIdAndUpdate(req.params._id, req.body, function (err, result) {
//             if (err) next(err);
//             res.status(200).send('user updated');
//         })
//     },   
//     /** D */
//     deleteUser: function (req, res, next) {
//         User.findByIdAndRemove(req.query.id, function (err, deleteUser) {
//             if (err) { res.status(500).send(err); }
//             else { res.send(deleteUser); }
//         })
//     },
// };
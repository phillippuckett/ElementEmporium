/** Cart *//** Cart *//** Cart *//** Cart *//** Cart *//** Cart */
/** Cart *//** Cart *//** Cart *//** Cart *//** Cart *//** Cart */
/** Cart *//** Cart *//** Cart *//** Cart *//** Cart *//** Cart */
/*var Order = require('./../models/order');

module.exports = {

    addToCart: function (req, res, next) {
        Order.create(req.body, function (err, addToCart) {
            if (err) { res.status(500).send(err); }
            else {
                Order.cart.push(req.query.productId);
                Order.save(function () {
                    Order.findById(req.params.userId).populate('cart')
                        .exec(function (err, addToCart) {
                            res.status(200).send(addToCart.cart);
                        })
                })
            }
        })
    },

    createOrder: function (req, res, next) {
        Order.create(req.body, function (err, createOrder) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send(createOrder); }
        })
    },

    removeFromCart: function (req, res, next) {
        Order.findById(req.params.userId, function (err, removeFromCart) {
            if (err) { res.status(500).send(err); }
            else {
                for (var i = User.cart.length - 1; i >= 0; i--) {
                    var currentProduct = User.cart[i];
                    if (currentProduct == req.query.productId) {
                        User.cart.splice(i, 1);
                        break;
                    }
                }
                User.save(function () {
                    User.findById(req.params.userId).populate('cart')
                        .exec(function (err, user) {
                            if (err) { res.status(500).send(err); }
                            else { res.status(200).send(user.cart); }
                        })
                })
            }
        })
    },
}; */


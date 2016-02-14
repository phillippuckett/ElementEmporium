var Order = require('./../models/order');

module.exports = {
    /** C */
    createOrder: function (req, res) {
        Order
            .create(req.body)
            .exec(function (err, createOrder) {
                if (err) { res.status(500)
                .send(err); }
                else { res.send(createOrder); }
            })
    },
    
    /** R */
    readOrder: function (req, res) {
        Order.find(req.query).populate('user').exec(function (err, readOrder) {
            if (err) { res.status(500).send(err); }
            else { res.send(readOrder); }
        })
    },
    
    /** R */
    getUnfinishedOrder: function (req, res) {
        Order.find({ user: req.params.userId, fulfilled: false }).exec(function (err, getOrder) {
            if (err) { res.status(500).send(err); }
            else { res.send(getOrder); }
        })
    },
    
    /** U */
    pushProductToOrder: function (req, res) {
        // http://mongoosejs.com/docs/api.html
        Order.findByIdAndUpdate(req.params.orderId, {}, { new: true }, function ( err, updateOrder) {
            if (err) { res.status(500).send(err); }
            else { 
               updateOrder.product.push(req.body.productId);
               updateOrder.save();
                res.send(updateOrder); 
                }            
        })
    },  
    
    
    
    //     addToOrderCart: function (req, res, next) {
    //     Order.create(req.body, function (err, addToOrderCart) {
    //         if (err) { res.status(500).send(err); }
    //         else {
    //             Order.cart.push(req.query.productId);
    //             Order.save(function () {
    //                Order.findById(req.params.userId).populate('order')
    //                     .exec(function (err, addToOrderCart) {
    //                         res.status(200).send(addToOrderCart.order);
    //                     })
    //             })
    //         }
    //     })
    // }
};

/** Cart *//** Cart *//** Cart *//** Cart *//** Cart *//** Cart */
/** Cart *//** Cart *//** Cart *//** Cart *//** Cart *//** Cart */
/** Cart *//** Cart *//** Cart *//** Cart *//** Cart *//** Cart */
/* var Order = require('./../models/order');

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

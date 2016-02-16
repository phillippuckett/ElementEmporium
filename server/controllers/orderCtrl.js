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
        Order.find(req.query)
        .populate('user')
        .exec(function (err, readOrder) {
            if (err) { res.status(500).send(err); }
            else { res.send(readOrder); }
        })
    },
    
    /** R */
    getUnfinishedOrder: function (req, res) {
        Order
        .find({ user: req.params.userId, fulfilled: false })
        .exec(function (err, getOrder) {
            if (err) { res.status(500).send(err); }
            else { res.send(getOrder); }
        })
    },
    
    /** U */
    pushProductToOrder: function (req, res) {
        // http://mongoosejs.com/docs/api.html
        Order
        .findByIdAndUpdate(req.params.orderId, {}, { new: true }, function ( err, updateOrder) {
            if (err) { res.status(500).send(err); }
            else { 
               updateOrder.product.push(req.body.productId);
               console.log('Product Pushed', req.body);
               updateOrder.save();
                res.send(updateOrder); 
                }            
        })
    },  
};

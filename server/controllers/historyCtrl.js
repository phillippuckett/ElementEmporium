/** These 'Require's are necessary for to set up the schema*/
var Order = require('./../models/order.js');
var History = require('./../models/history');

module.exports = {
    /** C */
    createHistory: function (req, res) {
        console.log(req.user._id);
        console.log(req.body);
        History
            .create({ user: req.user._id }, function (err, createHistory) {
                if (err) { res.status(500).send(err); }
                else {
                    createHistory.order.push(req.body.orderId)
                    createHistory.save();
                    res.send(createHistory);
                    console.log('Order has been Histored');
                }
            })

    },
    /** R */
    getHistory: function (req, res) {
        History
            .find({ user: req.user._id })
            .populate({ path: 'order' })
        // .populate({ path: 'order', model: Order, populate: { path: 'product', model: Product } })
            .exec(function (err, getHistory) {
                if (err) { res.status(500).send(err); }
                else {
                    // console.log('ORDER HISTORY2', getHistory);
                    // Order.populate(getHistory, { path: 'order.product' }, function (err2, getHistory2) {
                    //     if (err2) { res.status(500).send(err2); }
                    //     else {
                    //         res.status(200).send(getHistory2);
                    //     }
                    // })

                    getHistory.forEach(function(item, index) {
                        Order.populate(item.order, {
                            path: 'product'
                        }, function(err2, result2) {
                            if (err2) {
                                res.send(400).send(err2);
                            } else {
                                getHistory[index]._doc.order.product = result2;
                                if (index === getHistory.length - 1) {
                                    res.status(200).json(getHistory);
                                }
                            }
                        })
                    })      
                }
            })
    }
};
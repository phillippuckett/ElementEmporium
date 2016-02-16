/** These 'Require's are necessary for to set up the schema*/
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
    getHistory: function (req, res, next) {
        History
            .find.populate('history').exec()
            .then(function (err, getHistory) {
                if (err) { res.status(500).send(err); }
                else { res.status(200).send(getHistory); }
            })
    }
};
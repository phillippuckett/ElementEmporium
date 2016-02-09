/** Product *//** Product *//** Product *//** Product *//** Product *//** Product */
/** Product *//** Product *//** Product *//** Product *//** Product *//** Product */
/** Product *//** Product *//** Product *//** Product *//** Product *//** Product */
var Product = require('./../models/product');


module.exports = {
    /** C */
    createProduct: function (req, res, next) {
        new Product(req.body).save(function (err, createProduct) {
            if (err) { res.status(500).send(err); }
            else { res.send(createProduct); }
        })
    },
    /** R */
    readProduct: function (req, res) {
        console.log("Searching for: " + req.query.title)
        Product.find({ title: new RegExp(req.query.title, "i") }).exec(function (err, readProduct) {
            if (err) { res.status(500).send(err); }
            else { res.send(readProduct); }
        })
    },
    /** U */
    updateProduct: function (req, res, next) {
        Product.findByIdAndUpdate(req.query.id), { $set: req.body }, function (err, updateProduct) {
            if (err) { res.status(500).send(err); }
            else { res.send(updateProduct); }
        }
    },
    /** D */
    deleteProduct: function (req, res, next) {
        Product.findByIdAndRemove(req.query.id, function (err, deleteProduct) {
            if (err) { res.status(500).send(err); }
            else { res.send(deleteProduct); }
        })
    }
};
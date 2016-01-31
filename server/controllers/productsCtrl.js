
var Product = require('./../models/productsModel');


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
res.status(200).send();
        // console.log("Searching for: " + req.query)
        // Product.find(req.query).exec(function (err, readProduct) {
        //     if (err) { res.status(500).send(err); }
        //     else { res.send(readProduct); }
        // })
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
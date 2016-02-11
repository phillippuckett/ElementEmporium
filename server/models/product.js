/** PRODUCTS *//** PRODUCTS *//** PRODUCTS *//** PRODUCTS *//** PRODUCTS *//** PRODUCTS */
/** PRODUCTS *//** PRODUCTS *//** PRODUCTS *//** PRODUCTS *//** PRODUCTS *//** PRODUCTS */
/** PRODUCTS *//** PRODUCTS *//** PRODUCTS *//** PRODUCTS *//** PRODUCTS *//** PRODUCTS */
/** This 'Require' is necessary for to set up the schema*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/** Schema Object*/
var ProductSchema = new Schema({
    title: { type: String, unique: true, required: true, index: String },
    description: { type: String, required: true },
    quantity: { type: Number, min: 1, required: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, required: true },
    // reviews: [{
    //     reviewer: { type: String },
    //     rating: { type: Number },
    //     desc: { type: String },
    //     date: { type: Date, default: new Date() }
    // }]
});

/** The model for the schema above*/
module.exports = mongoose.model('Product', ProductSchema);


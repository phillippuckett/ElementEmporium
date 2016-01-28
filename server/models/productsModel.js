/** This 'Require' is necessary for to set up the schema*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/** Schema Object*/
var ProductSchema = new Schema({
    title: { type: String, unique: Boolean, required: true, index: String },
    description: { type: String, required: true },
    reviews: [{
        reviewer: { type: String },
        rating: { type: Number },
        desc: { type: String },
        date: { type: Date, default: new Date() }
    }],
    quantity: { type: Number, min: 1, required: true },
    price: { type: Number, required: true, min: 0 },
});

/** The model for the schema above*/
module.exports = mongoose.model('Product', ProductSchema);
/** These 'Require's are necessary for to set up the schema*/
var mongoose = require('mongoose');
// var Cart = require('./CartSchema');
var Product = require('./productsModel');
var Schema = mongoose.Schema;

/** Schema Object */
var OrderSchema = new Schema({
    //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    user: { type: String, required: true },
    placed: { type: Date, default: Date.now },
    // products: [Cart]
    product: [Product]
})

/** The model for the schema above*/
module.exports = mongoose.model('Order', OrderSchema);
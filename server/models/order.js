/** These 'Require's are necessary for to set up the schema*/
var mongoose = require('mongoose');
var Product = require('./product');
var Schema = mongoose.Schema;

/** Schema Object */
var OrderSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    placed: { type: Date, default: Date.now },
    product: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    fulfilled: {type: Boolean, default: false }
})

/** The model for the schema above*/
module.exports = mongoose.model('Order', OrderSchema);
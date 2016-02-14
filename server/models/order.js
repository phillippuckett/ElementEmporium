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

/** CART *//** CART *//** CART *//** CART *//** CART *//** CART */
/** CART *//** CART *//** CART *//** CART *//** CART *//** CART */
/** CART *//** CART *//** CART *//** CART *//** CART *//** CART */

/** This 'Require' is necessary for to set up the schema*/
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

/** Schema Object*/
// var CartSchema = new Schema({
//     quanity: { type: Number, min: 1, required: true },
//     product: [
//         { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//     ]
// })

/** The model for the schema above*/
/* module.exports = module.exports = mongoose.model('Order',CartSchema);*/
// module.exports = CartSchema;
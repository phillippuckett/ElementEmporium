/** These 'Require's are necessary for to set up the schema*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/** Schema Object */
var HistorySchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    order: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
})

/** The model for the schema above*/
module.exports = mongoose.model('History', HistorySchema);
/** USERS *//** USERS *//** USERS *//** USERS *//** USERS *//** USERS */
/** USERS *//** USERS *//** USERS *//** USERS *//** USERS *//** USERS */
/** USERS *//** USERS *//** USERS *//** USERS *//** USERS *//** USERS */
/** These 'Require's are necessary for to set up the schema*/
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

/** Schema Object */
var UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    emailAddress: { type: String, required: true, unique: true },
    phoneNumber: { type: String }, 
      
    resident: { type: String },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    
    cardName: {type: String, required: true },
    cardNumber: {type: String, required: true},
    mm: {type: String, required: true},
    yyyy: {type: String, required: true},
    securityCode: { type: String, required: true },
    cardCompany: {type: String, required: true},
    password: { type: String, required: true }
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    return next(null, user);
});

UserSchema.methods.verifyPassword = function (reqBodyPassword) {
    var user = this;
    return bcrypt.compareSync(reqBodyPassword, user.password);
};

/** The model for the schema above*/
module.exports = mongoose.model('User', UserSchema);
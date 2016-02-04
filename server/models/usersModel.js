/** These 'Require's are necessary for to set up the schema*/
var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;
    
/** Schema Object */
var UserSchema = new Schema({
    username: { type: String, lowercase: true, unique: true, required: true },
    hash: String,
    salt: String
});

/** this allows incryption of the passwords entered */
UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {

    /** set expiration to 60 days */
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        _id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, 'SECRET');
};

/** The model for the schema above*/
module.exports = mongoose.model('User', UserSchema);

/* https://thinkster.io/mean-stack-tutorial#adding-authentication-via-passport */
/** These 'Require's are necessary for to set up the schema*/
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
// var jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;

/** Schema Object */
var UserSchema = new Schema({
    username: { type: String },
    email: { type: String, index: true, trim: true },
    password: { type: String }
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
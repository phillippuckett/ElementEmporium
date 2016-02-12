/** Dependencies */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/** User Model Plugged In */
var User = require('../models/user');

/** Passport */
passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, function (username, password, done) {
    console.log('Logging In');
    User.findOne({ username: username })
        .exec(function (err, user) {
            if (err) done(err);
            if (!user) return done(null, false);
            if (user.verifyPassword(password)) {
                console.log(user);
                return done(null, user);
            }
            return done(null, false);
        });
}));

passport.serializeUser(function (user, done) {
    console.log('serializing ', user)
    done(null, user._id);
});
passport.deserializeUser(function (_id, done) {
    console.log('deserializing ', _id);
    User.findById(_id, function (err, user) {
        console.log(user);
        done(err, user);
    });
});
module.exports = passport;
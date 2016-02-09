/** User *//** User *//** User *//** User *//** User *//** User */
/** User *//** User *//** User *//** User *//** User *//** User */
/** User *//** User *//** User *//** User *//** User *//** User */
var User = require('./../models/user');

module.exports = {
    /** C *//** https://github.com/dallincrane/example-local-auth */
    register: function (req, res, next) {
        console.log('Creating New User');
        
        User.create(req.body, function (err, registerUser) {
            if (err) {
                console.error(err);
                console.log('Existing User');
                return res.status(500).json(err);
            }
            res.status(200).json(registerUser);
        })
    },
    /** R */
    readUser: function (req, res, next) {
        User.find.populate('cart').exec().then(function (err, readUser) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send(readUser); }
        })
    },
    /** https://github.com/dallincrane/example-local-auth */
    currentUser: function (req, res, next) {
        if (!req.user) return res.status(401).send('current user not defined');
        req.user.password = null;
        return res.status(200).json(req.user);
    },
    /** U */
    updateUser: function (req, res, next) {
        User.findByIdAndUpdate(req.params._id, req.body, function (err, result) {
            if (err) next(err);
            res.status(200).send('user updated');
        })
    },   
    /** D */
    deleteUser: function (req, res, next) {
        User.findByIdAndRemove(req.query.id, function (err, deleteUser) {
            if (err) { res.status(500).send(err); }
            else { res.send(deleteUser); }
        })
    },
};

var accountcontroller = function (usermodel, session, mailer) {

    this.crypto = require('crypto');
    this.uuid = require('node-uuid');
    this.apiresponse = require('../models/api-response');
    this.apimessages = require('../models/api-messages');
    this.userprofilemodel = require('../models/user-profile');
    this.usermodel = usermodel;
    this.session = session;
    this.mailer = mailer;
};

accountcontroller.prototype.getsession = function () {
    return this.session;
}

accountcontroller.prototype.setsession = function (session) {
    this.session = session;
};

accountcontroller.prototype.hashpassword = function (password, salt, callback) {
    var iterations = 10000,
        keylen = 64;
    this.crypto.pbkdf2(password, salt, iterations, keylen, callback);
};

//Login
accountcontroller.prototype.logon = function(email, password, callback) {
    var me = this;
    me.usermodel.findone({ email: email }, function (err, user) {
        if (err) {
            return callback(err, new me.apiresponse({ success: false, extras: { msg: me.apimessages.db_error } }))
        }

        if (user) {
            me.hashpassword(password, user.passwordsalt, function (err, passwordhash) {
                if (passwordhash == user.passwordhash) {
                    var userprofilemodel = new me.userprofilemodel({
                        email: user.email,
                        username: user.username
                    });

                    me.session.userprofilemodel = userprofilemodel;

                    return callback(err, new me.apiresponse({
                        sucess: true, extras: {
                            userprofilemodel:userprofilemodel
                        }
                    }));
                } else {
                    return callback(err, new me.apiresponse({ success: false, extras: {msg: me.apimessages.invalid_pwd }}));
                }
            });
        } else {
            return callback(err, new me.apiresponse({ success: false, extras: { msg: me.apimessages.email_not_found }}));
        }
    })
}

//Logoff
accountcontroller.prototype.logoff = function() {
    if (this.session.userprofilemodel) delete this.session.userprofilemodel;
    return;
};

accountcontroller.prototype.register = function (newuser, callback) {
    var me = this;
    me.usermodel.findone({ email: newuser.email }, function (err, user) {
        if (err) {
            return callback(err, new me.apiresponse({success: false, extras: { msg: me.apimessages.db_error } }));
        }
        if (user) {
            return callback(err, new me.apiresponse({ sucess: false, extras: { msg: me.apimessages.email_already_exists } }));
        } else {
            newuser.save(function (err, user, numberaffected) {
                if (err) {
                    return callback(err, new me.apiresponse({ success: false, extras: {msg: me.apimessages.db_error} }));
                }

                if (numberaffected === 1) {
                    var userprofilemodel = new me.userprofilemodel({
                        email: user.email,
                        username: user.username
                    });
                    
                    return callback(err, new me.apiresponse({
                        success: true, extras: {
                            userprofilemodel: userprofilemodel
                        }
                    }));
                } else {
                    return callback(err, new me.apiresponse({ success: false, extras: { msg: me.apimessages.could_not_create_user } }));
                }
            });
        }
    });
};

accountcontroller.prototype.resetpassword = function (email, callback) {
    var me = this;
    me.usermodel.findone({ email: email }, function (err, user) {
        if (err) {
            return callback(err, new me.apiresponse({ success: false, extras: { msg: me.apimessages.db_error } }));
        }
        //save current email & reset hash
        var passwordresethash = me.uuid.v4();
        me.session.passwordresethash = passwordresethash;
        me.session.emailwhorequestedpasswordreset = email;

        me.mailer.sendpasswordresethash(email, passwordresethash);

        return callback(err, new me.apiresponse({ success: true, extras: { passwordresethash: passwordresethash } }));
    })
};

accountcontroller.prototype.resetpasswordfinal = function (email, newpassword, passwordresethash, callback) {
    var me = this;
    if (!me.session || !me.session.passwordresethash) {
        return callback(null, new me.apiresponse({ success: false, extras: { msg: me.apimessages.password_reset_expired} }));
    }

    if (me.session.emailwhorequestedpasswordreset !== email) {
        return callback(null, new me.apiresponse({ success: false, extras: {msg: me.apimessages.password_reset_hash_mismatch } }));
    }

    if (me.session.emailwhorequestedpasswordreset !== email) {
        return callback(null, new me.apiresponse({ success: false, extras: {msg: me.apimessages.password_reset_email_mismatch} }));
    }

    var passwordsalt = this.uuid.v4();

    me.hashpassword(newpassword, passwordsalt, function (err, passwordhash) {
        me.usermodel.update({ email: email}, {passwordhash: passwordhash, passwordsalt: passwordsalt }, function (err, numberaffected, raw) {

            if (err) {
                return callback(err, new me.apiresponse({ success: false, extras: { msg: me.apimessages.db_error } }));
            }

            if (numberaffected < 1) {

                return callback(err, new me.apiresponse({ success: false, extras: { msg: me.apimessages.could_not_reset_password } }));
            } else {
                return callback(err, new me.apiresponse({ success: true, extras: null }));
            }
        });
    });
};

module.exports = accountcontroller;
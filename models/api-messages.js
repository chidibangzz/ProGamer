var apimessages = function() {};
apimessages.prototype.email_not_found = 0;
apimessages.prototype.invalid_pwd = 1;
apimessages.prototype.db_error = 2;
apimessages.prototype.not_found = 3;
apimessages.prototype.email_already_exists = 4;
apimessages.prototype.could_not_create_user = 5;
apimessages.prototype.password_reset_expired = 6;
apimessages.prototype.password_reset_hash_mismatch = 7;
apimessages.prototype.password_reset_email_mismatch = 8;
apimessages.prototype.could_not_reset_password = 9;

module.exports = apimessages;
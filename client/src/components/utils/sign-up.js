(function () {

})();

var emailAddressIsValid = function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

var passwordsMatch = function (password, passwordConfirm) {
    return password === passwordConfirm;
};

if (!emailAddressIsValid(emailAddress)) {
    $ctnErr.html("<p>Please enter a valid email address.</p>");
    return;
}

if (!passwordsMatch(password, passwordConfirm)) {
    $ctnErr.html("<p>Your passwords don't match.</p>");
}

$.ajax({
    type: 'POST',
    url: "mongodb://localhost/reactreadinglist",
    data: "email=" + emailAddress + "&username" + username + "&password=" + password + "&passwordConfirm" + passwordConfirm,
    success: function (resp) {

        if (resp.success === true) {
            console.log('registration success with data =' + data);
            return;
        } else {
            if (resp.extras.msg) {
                switch (resp.extras.msg) {
                    case videogamer.ApiMessages.DB_ERROR:
                    case videogamer.ApiMessages.COULD_NOT_CREATE_USER:
                        $ctnErr.hrml("<p>Database had a problem and could not register you! Please try again later.</p>");
                    case videogamer.ApiMessages.EMAIL_ALREADY_EXISTS:
                        $ctnErr.html("<p>The email address provided is already registered</p>");
                        break;
                }
            }
        }
    },
    error: function (e) {
        console.log(e.message);
        $ctnErr.html("<p>Site had a problem and could not register you! Please try again later.</p>")
    }
});
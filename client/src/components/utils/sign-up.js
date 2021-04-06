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

// $.ajax({
//     type: 'POST',
//     url: 
// })
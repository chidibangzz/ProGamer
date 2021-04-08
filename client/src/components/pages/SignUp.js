import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';

export default function SignUp () {
    return (
        <>
        <div>
            <div>
                <h1>Sign Up</h1>
                <h2>Welcome!</h2>
                <p><b>
                    <Link to='/sign-in'>
                        Existing Users
                    </Link>
                </b></p>
                <form>
                    <label htmlFor="txt-first-name">Username</label>
                    <input type="text" name="txt-first-name" id="txt-first-name" />
                <br />
                    <label htmlFor="txt-email">Email Address</label>
                    <input type="text" name="txt-email" id="txt-email" />
                <br />
                    <label htmlFor="txt-password">Password</label>
                    <input type="text" name="txt-password" id="txt-password" />
                <br />
                    <label htmlFor="txt-password-confirm">Confirm Password</label>
                    <input type="text" name="txt-password-confirm" id="txt-password-confirm" />
                </form>
                <br />
                <input onClick={() => {submitForm(
                    document.getElementById('txt-first-name').value,
                    document.getElementById('txt-email').value,
                    document.getElementById('txt-password').value,
                    document.getElementById('txt-password-confirm').value)
                }
            }
                    type="submit" name="submit" id="btn-submit"/>
            </div>
    </div>
    </>
    );
    function submitForm(username, email, password, passwordConfirm) {
        var data = "email=" + email + "&username" + username + "&password=" + password + "&passwordConfirm" + passwordConfirm;
        console.log(data);
        //Check if PW & Confirm PW match
        var passwordsMatch = function (password, passwordConfirm) {
            return password === passwordConfirm;
        };
        //If they don't, return
        if (!passwordsMatch(password, passwordConfirm)) {
            //$ctnErr.html("<p>Your passwords don't match.</p>");
            console.log("Passwords do not match")
            return;
        }
        //else if 
    };
}
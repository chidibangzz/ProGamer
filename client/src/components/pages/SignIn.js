import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';

//change line 32 & 37 HREF to link later
export default function SignIn () {
    return (
        <>
        <div>
        <div>
            <h1>Login</h1>
        </div>
        <div>
            <h2>Welcome!</h2>
            <p><b>
            <Link to='/sign-up'>
                Don't have an account?
            </Link>
            </b></p>
            <div>
            <p><b>Login Here</b></p>
            <label htmlFor="txt-email">Email Address</label>
            <input type="text" id="txt-email" />
            <br/>
            <label htmlFor="txt-password">Password</label>
            <input type="password" name="txt-password" id="txt-password" />
            </div>
            <fieldset data-role="controlgroup">
                <input type="checkbox" name="chck-rememberme" id="chck-rememberme" />
                <label htmlFor="chck-rememberme">Remember Me</label>
            </fieldset>
            <a href="#dlg-invalid-credentials" id="btn-submit">Submit</a>
            <p><a href="begin-password-reset.html">Can't access your account?</a></p>
            <div id="dlg-invalid-credentials">
                <div role="main">
                    <h3>Login Failed</h3>
                    <p>Did you enter the right credentials?</p>
                    <div><a href="#" data-rel="back">OK</a></div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

//  <div>
//  <p><b>Sign In</b></p>
//  <label for="txt-email">Email Address</label>
//  <input type="text" name="txt-email" id="txt-email" value=""></input>
//  <label for="txt-password">Password</label>
//  <input type="password" name="txt-password" id="txt-password" value=""></input>
//  </div>
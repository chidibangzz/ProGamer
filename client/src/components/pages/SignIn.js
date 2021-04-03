import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';

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
            <p><b>Login Here</b></p>
            <div>
            <label for="txt-email">Email Address</label>
            <input type="text" name="txt-email" id="txt-email" value=""></input>
            <label for="txt-password">Password</label>
            <input type="password" name="txt-password" id="txt-password" value=""></input>
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
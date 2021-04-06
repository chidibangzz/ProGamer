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
                <br />
                <a href="#dlg-sign-up-sent" id="btn-submit">Submit</a>
                <div id="dlg-sign-up-sent">
                    <h3>Account Created Successfully!</h3>
                </div>
            </div>
        <div>
        </div>
    </div>
    </>
    )
}
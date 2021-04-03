import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';

export default function SignUp () {
    return (
        <>
        <div>
        <div>
            <h1>Sign Up</h1>
        </div>
        <div>
            <h2>Welcome!</h2>
            <p><b>
            <Link to='/sign-in'>
                Existing Users
            </Link>
            </b></p>
            <p><b>Don't have an account?</b></p>
            
        </div>
    </div>
    </>
    )
}
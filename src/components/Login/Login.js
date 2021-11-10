import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please Log In</h2>
            <button class="btn btn-primary" onClick={signInUsingGoogle}>Google Sign In</button>
            <br/>
            <Link class="btn btn-primary" to="/register">New User?</Link>
            <br/>
        </div>
    );
};

export default Login;
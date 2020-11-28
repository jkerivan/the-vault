import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import LoginModal from 'react-login-modal';
import { login } from '../actions/auth';
import { Register } from '../actions/auth';


const Login = (props) => {

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const handleSignup = (username, email, password) => {};
    const handleLogin = (username, password) => {
        dispatch(login(username, password))
            .then(() => {
                props.history.push("/profile");
                window.location.reload();
            })
            .catch(() => {
                // handle error
            });
    }

    if (isLoggedIn) {
        return <Redirect to="/profile" />;
    }

    return (
        <div>
            <LoginModal
                handleSignup={handleSignup}
                handleLogin={handleLogin}
                buttonColor={"#080808"}
                disabledButtonColor={"#26282e"}
                buttonHoverColor={"#26282e"}
            />
        </div>
    );
};
export default Login;
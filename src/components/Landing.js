import React, {useState, useEffect} from "react";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";
const Landing = () => {
    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies();

    useEffect(() => {
        if (cookies.isLoggedIn)
        {
            navigate("/profile");
        }
    }, []);

    return (
        <>
            <h1 className="page-title">vStudent</h1>
            <div className="custom-center">
                <Button name="Login" onClick={(e) => navigate('/login')} />
                <Button name="SignUp" onClick={(e) => navigate('/signup')} />
            </div>
        </>
    );
};

export default Landing;
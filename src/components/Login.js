import React, {useState, useEffect, useLayoutEffect} from "react";
import Button from "./Button";
import auth from '../api/auth.js';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import DummyComponent from "./DummyComponent";
import axios from "axios";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookies] = useCookies();

    const navigate = useNavigate();

    useEffect(() => {
        if (cookies.isLoggedIn)
        {
            navigate("/profile");
        }
    });

    const signup = (e) => {
      navigate("/signup");
    };
    const onSubmit = async (e) => {
        console.log("works");
        e.preventDefault();
        const res = await auth.post('/login', {
            'username': username,
            'password': password
        });
        console.log("res" + res);
        const token = res.data.token;
        console.log(token);
        if (token !== "")
        {
            let role = "";
            setCookies('token', token, {path: '/'});
            setCookies('username', username, {path: '/'});
            setCookies('role', role, {path: '/'});
            setCookies('isLoggedIn', true, {path: '/'});

            navigate('/profile');
        }
        else
        {
            navigate('/login');
        }
    };
    if (cookies.isLoggedIn)
    {
        navigate('/profile');
    }
    return (
        <>
            <h1 className="page-title">Login</h1>
            <form>
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="username" placeholder="Username" value={username}
                                   onChange={(e) => setUsername(e.target.value)}/>
                            <label className="form-label">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" name="Password" placeholder="Password" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                            <label>Password</label>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Button name="Login" onClick={(e) => onSubmit(e)}/>
                                <Button name="Don't have an account? Sign Up" onClick={(e) => signup(e)} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;
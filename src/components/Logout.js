import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom'
import Button from "./Button";
const Logout = () => {
    const navigate = useNavigate();
    const [cookies, setCookies, removeCookies] = useCookies();
    const logout = (e) => {
      removeCookies('username');
      removeCookies('role');
      removeCookies('token');
      removeCookies('isLoggedIn');
      removeCookies('user');
      removeCookies('id');
      navigate("/");
    };
    const cancel = (e) => {
      navigate("/profile");
    };
    return (
        <div className="row justify-content-center">
            <div className="card col-4">
                <div className="card-body">
                    <h5 className="card-title">Time to say Goodbye?</h5>
                    <p className="card-text">Your content stays safe.</p>
                    <Button className="card-link btn" onClick={(e) => logout(e)} name="Adios :(" />
                    <Button className="card-link btn" onClick={(e) => cancel(e)} name="Sike!" />
                </div>
            </div>
        </div>
    );
};

export default Logout;
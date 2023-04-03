import React from "react";
import { useCookies } from "react-cookie";

const DummyComponent = (props) => {
    const [cookies, setCookies] = useCookies();

    return (
        <div>
        <h1>{props.title}</h1>
        <h5>My token : {cookies.token}</h5>
        </div>
    );
};

export default DummyComponent;
import React from "react";

const Button = (props) => {
    return (
        <>
            <button className="btn-standard" type="submit" onClick={props.onClick}>{ props.name }</button>
        </>
    );
};

export default Button;
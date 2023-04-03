import React from 'react';
import './Menu.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <div className="navbar">
            <ul className="nav">

                <h1 className="menu-brand">vStudent</h1>
                <li className="nav-item">
                    <Link to="/forums" className="nav-link">
                        Forums
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/blogs" className="nav-link">
                        Blogs
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/carpools" className="nav-link">
                        Carpools
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/documents" className="nav-link">
                        Documents
                    </Link>
                </li>
            </ul>

            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        <i className="bi bi-person"></i>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/logout" className="nav-link">
                        <i className="bi bi-box-arrow-right red"></i>
                    </Link>
                </li>
            </ul>

        </div>
    );
};

export default Menu;
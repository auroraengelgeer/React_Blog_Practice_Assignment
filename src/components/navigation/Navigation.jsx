import React from 'react';
import logo from "../../assets/logo-medium.png"
import {NavLink} from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <img src={logo} className="logo" alt="logo"/>
                <ul>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/blog-overview">
                            Alle posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/new-post">
                            Nieuwe post maken
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
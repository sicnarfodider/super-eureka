import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = ()=>{
    return(
        <nav style={{padding: "0 10px"}} className="blue">
            <NavLink className="brand-logo" to="/"> Movie Quotes </NavLink>
            <ul className="right">
                <li>
                    <NavLink activeClassName="selected" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/movie-qoutes">Movie Qoutes</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/sign-in">Sign In</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/sign-up">Sign Up</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;

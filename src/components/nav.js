import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = ()=>{
    return(
        <nav style={{padding: "0 10px"}} className=" z-depth-4 yellow lighten-2">
            <NavLink className="black-text brand-logo" to="/"> Movie Quotes </NavLink>
            <ul className="right black-text">
                <li>
                    <NavLink className="black-text" activeClassName="selected" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="black-text"  activeClassName="selected" to="/movie-quotes">Movie Quotes</NavLink>
                </li>
                <li>
                    <NavLink className="black-text"  activeClassName="selected" to="/sign-in">Sign In</NavLink>
                </li>
                <li>
                    <NavLink className="black-text"  activeClassName="selected" to="/sign-up">Sign Up</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;

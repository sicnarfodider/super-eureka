import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import  { signOut } from '../actions';

const Nav = (props)=>{

    function renderAuthLinks(){
        if(props.auth){
            return(
                <li>
                    <NavLink  onClick={props.signOut} className="black-text"  activeClassName="selected" to="/">
                        Sign Out
                    </NavLink>
                </li>
                )
            }
            return[
                <li key="0" >
                    <NavLink className="black-text"  activeClassName="selected" to="/sign-in">Sign In</NavLink>
                </li>,
                <li key="1" >
                    <NavLink className="black-text"  activeClassName="selected" to="/sign-up">Sign Up</NavLink>
                </li>
            ]
    }

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
                {renderAuthLinks()}
            </ul>
        </nav>
    )
}

function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}


export default connect(mapStateToProps,{signOut})(Nav);

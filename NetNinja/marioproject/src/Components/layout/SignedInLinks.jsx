import React from 'react'
import {NavLink} from 'react-router-dom'



const SignedInLinks=(props)=>{
    console.log(props); 
    return(                
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <NavLink className="nav-link" to='/createproject'>NewProject</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to='/logout'>Log Out</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="btn btn-light" to='/'>NN</NavLink>
            </li>            
            </ul>
    );
};

export default SignedInLinks;

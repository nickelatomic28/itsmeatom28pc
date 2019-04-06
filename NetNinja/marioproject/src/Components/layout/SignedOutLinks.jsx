import React from 'react'
import {NavLink} from 'react-router-dom'

export const SignedOutLinks=()=>{
    return(       
        
            <ul className="navbar-nav mr-auto">          
                <li className="nav-item">
                <NavLink className="nav-link" to='/signup'>SignUp</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to='/signin'>Login</NavLink>
                </li>            
            </ul>
    );
}


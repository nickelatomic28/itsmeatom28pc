import React from 'react'
import {Link} from 'react-router-dom'

const SigninginLink = ()=>{
    return(
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <Link className="nav-link" to="/signup" >SignUp</Link>
            </li>                
            <li className="nav-item">
                <Link className="nav-link"to="/login">Login</Link>
            </li>
        </ul>
    );
}


export default SigninginLink;
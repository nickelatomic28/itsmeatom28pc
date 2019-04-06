import React from 'react';
import {Link,NavLink} from 'react-router-dom'


export default class NavigationBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">ContactUs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">AboutUs</NavLink>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/posts">BlogsPosts</Link>
                    </li>
                    </ul>
                </div>
                </nav>
        );
    }
}
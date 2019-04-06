import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const StudentSigningOutLink = (props)=>{
    console.log(props);
    return(
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <span className="navbar-brand">{props.LoginReducer.loginuser}</span>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/createproject">NewProject</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/#">Notification</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/logout">Logout</Link>
                </li>                 
            </ul>
    );
}

const mapStateToProps=(state)=>{
    return state;
}
export default connect(mapStateToProps)(StudentSigningOutLink);
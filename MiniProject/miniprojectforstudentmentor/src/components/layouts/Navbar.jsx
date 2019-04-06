import React from 'react'
import SigningInLink from './SigningInLink'
import StudentSigningOutLink from './StudentSigningOutLink'
import MentorSigningOutLink from './MentorSigningOutLink'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const NavBar=(props)=>{
    console.log(props);
    const signINLink=<SigningInLink/>;
    const stuSignOUTLink=<StudentSigningOutLink/>;
    const mentSignOUTLink=<MentorSigningOutLink/>;
    var typeOFLinksToActivate;
    if(props.LoginReducer.loginflag===true&&props.LoginReducer.loginusertype==="student_user"){
        typeOFLinksToActivate=stuSignOUTLink;
    }
    if(props.LoginReducer.loginflag===true&&props.LoginReducer.loginusertype==="mentor_user"){
        typeOFLinksToActivate=mentSignOUTLink;
    }
    
    var flag=props.LoginReducer.loginflag===true?typeOFLinksToActivate:signINLink
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link className="navbar-brand" to="/">Home</Link>           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {flag}      
            </div>
            </nav>
    );
}

const mapStateToProps=(state)=>{
    console.log(state);
    return state;
}
export default  connect(mapStateToProps)(NavBar);
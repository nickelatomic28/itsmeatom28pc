import React from 'react'
import {connect} from 'react-redux'

class SignUp extends React.Component{

    signUpTheUser=(event)=>{
        console.log("Sinup new user");
        const newuser={ };
        for(var i=0;i<event.target.length-1;i++){
            newuser[event.target[i].id]=event.target[i].value;
        }
        console.log(newuser);
    }
    render(){
        return(
            <div className="m-10">
                <form onSubmit={(event)=>this.signUpTheUser(event)}> 
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" placeholder="FirstName"/>                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" id="lastname" placeholder="LastName"/>
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                    </div>
        );
    }
}


const mapStateToProps=(state)=>{
    console.log(state);
   return state;
}

const mapDispatchToProps=(dispatch)=>{

    return {
        signUpUser:(newuser)=>{
            dispatch({type:"ADD_NEWUSER",newuser:newuser});
        }
    }
 }

export default connect(mapStateToProps)(SignUp);
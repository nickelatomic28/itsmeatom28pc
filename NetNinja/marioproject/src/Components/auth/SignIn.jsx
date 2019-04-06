import React from 'react';
import {connect} from 'react-redux';

class SignIn extends React.Component{
    
    loginWithEmailId=(event)=>{
        event.preventDefault();        
        console.log("**********");        
        const loginDetials={};
        for(var i=0;i<event.target.length-1;i++){
            loginDetials[event.target[i].id]=event.target[i].value;
        }
        console.log("===loginDetials===");
        console.log(loginDetials);
        this.props.login(loginDetials);
        console.log(this.props);
        this.props.history.push('/dashboard');
        
    }

    render(){
        return(
            <div className="border p-10"> 
            <div className="m-10">
                <form onSubmit={(event)=>this.loginWithEmailId(event)}> 
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
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
        login:(loginDetials)=>{
            dispatch({type:"LOGIN",loginDetials:loginDetials});
        }   
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
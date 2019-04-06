import React from 'react'
import {connect} from 'react-redux'
import {loginActions} from '../../actions/LoginActions'
import ErrModal from '../modals/ErrModal'
import {Redirect} from 'react-router-dom'
class Login extends React.Component{

    //very  basic login functionality not proper one
    loginUserServerSideValidaton=(event)=>{
        event.preventDefault();
        console.log(event.target[0].value);
        console.log(event.target[1].value);
               
        console.log(this.props);
        const logindetails={
            "id": event.target[0].value,
            "password":event.target[1].value
        }

        this.props.loginActions(logindetails);
   
        // console.log(this.props);
        // console.log("=======Login Sucessfull if below print statement return true======");
        // console.log(this.props.LoginReducer.loginflag);
   //     if(this.props.LoginReducer.loginflag)
    //     this.props.history.push("/");
    }

    render(){
        var errormodal;
        if(this.props.ErrReducer.errormessage!=null&&this.props.ErrReducer.errormessage!=""){
           return  <ErrModal message={this.props.ErrReducer.errormessage}/>
        }
        const loginvalidation=(
            <div className="mb-3 ml-5">
                <span className="text-danger">Login failed, Please try again with valid credentials</span>
                </div>                
        );
        var validation=null;
        console.log(this.props.LoginReducer.loginflag);
        console.log(this.props.LoginReducer.loginuser);
        if(this.props.LoginReducer.loginflag!=null&&this.props.LoginReducer.loginflag===false&&this.props.ErrReducer.errormessage===""){
            validation=loginvalidation;
        }
        var redirect;
        if(this.props.LoginReducer.loginflag!=null && this.props.LoginReducer.loginflag){
            redirect=<Redirect to='/'/>
        }

        return(
            <div className="w-50 h-500 rounded container border mt-5 bg-light">
            {redirect}
                <form onSubmit={this.loginUserServerSideValidaton} className="p-4">
                <div className="form-group row">                    
                    <label className="col-sm-2 col-form-label" htmlFor="username1">ID</label>
                    <div className="col-sm-10">
                    <input type="id" className="form-control" id="id"  placeholder="Enter username"/>                   
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="password">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                </div>                
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {validation}
                </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state;
}
export default connect(mapStateToProps,{loginActions})(Login);
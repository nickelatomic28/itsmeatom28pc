import React from 'react'
import {Redirect,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutAction} from '../../actions/LoginActions'

class SignOut extends React.Component{

    // logOutUser=(event)=>{
    //     event.preventDefault();
           
    //     //this.props.history.push('/');
            
    // }
    componentDidMount(){
        console.log(this.props);
        this.props.logoutAction(); 
        this.props.history.push('/');
    }
    render(){
        console.log(this.props);
        return(            

            <div className="container w-50 m-5 ">
                <span className="rounded border border-success p-1 bg-light">Logged out sucessfully </span>
                </div>
            
        );
    }

}

const mapStateToProps=(state)=>{
    return state;
}

export default connect(mapStateToProps,{logoutAction})(SignOut);
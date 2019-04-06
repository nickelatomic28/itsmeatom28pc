import React from 'react'
import {connect} from 'react-redux'


class Logout extends React.Component{
    
    componentWillMount(){
        console.log("componentWillMount");
        console.log(this.props);
        this.props.logoutUser();
    }

    render(){
        return(
            <div  id="container">
                <span>User successfully loggedout</span>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    const updateduser={
        loggedin:false,
        marioUsers:null
    }
    const updatedstate={...state,users:updateduser};
    console.log(updatedstate);
   return updatedstate;
}
const mapDispatchToProps=(dispatch)=>{
    return{
        logoutUser:()=>{          
            console.log("inside logout dispatch ");  
           return dispatch({type:"LOGOUT"});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout);

import React from 'react';
import {Link,NavLink} from 'react-router-dom'
import SignedInLinks  from './SignedInLinks';
import { SignedOutLinks } from './SignedOutLinks';
import {connect} from 'react-redux'


class NavBar extends React.Component{

    
    
    render(){
      console.log(this.props);
    const signedoutlink=<SignedOutLinks/>;
    const signedinlink=<SignedInLinks/>;
      const activeLinks=this.props.users.loggedin?signedinlink:signedoutlink
        return(            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">             
              <NavLink className="nav-link" to='/'>MarioPlan</NavLink>         
                {activeLinks}     
            </div>
          </nav>
          
        );
    }
}

const mapSateToProps=(state)=>{
  console.log(state);
  let isAuth=false;
  if(state.users.loggedin){
      console.log("===loged in===");
      isAuth=true;
  }
  const updatedState={
      ...state,     
      auth:{authenticated:isAuth,uuid: null}
  };
  console.log(updatedState);
  return state;
}

export default connect(mapSateToProps)(NavBar);
import React, { Component } from 'react';
import NavBar from './Components/layout/NavBar';
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import DashBoard from './Components/dashboard/DashBoard';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import SignIn from './Components/auth/SignIn';
import LogOut from './Components/auth/LogOut';
import SignUp from './Components/auth/SignUp';
import CreateProject from './Components/projects/CreateProject';
import ProjectDetails from './Components/projects/ProjectDetails';
import {connect} from 'react-redux'

class MarioApp extends Component {

  

  render() {
    console.log(this.props);
   const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
       // this.props.auth.authenticated === true &&        
       this.props.users.loggedin ===true
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/signin',
              state: { from: props.location }
            }} />
      )} />
    )
    return (
      <div className="container">       
        
        <BrowserRouter>
        
          <div className="bg-light">
          <NavBar/>
          <PrivateRoute  exact path="/"  component={DashBoard}/>
          <Route path="/signin"  component={SignIn}/>
          <PrivateRoute path="/logout"  component={LogOut}/>
          <PrivateRoute  path="/dashboard"  component={DashBoard}/>
          <PrivateRoute path="/projects/:projectid"  component={ProjectDetails}/>
          <PrivateRoute path="/createproject"  component={CreateProject}/>          
          <PrivateRoute path="/notifications"  component={DashBoard}/>
          <Route path="/signup"  component={SignUp}/>   
          </div>     
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log(state);
  return state;
}


export default connect(mapStateToProps)(MarioApp);

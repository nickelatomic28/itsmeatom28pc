import React from 'react';
import NavBar from './layouts/Navbar'
import SignUp from './auth/signup/SignUp'
import Login from './auth/Login'
import SignOut from './auth/SignOut'
import CreateProject from './dashboard/projects/CreateProject'
import {BrowserRouter,Route} from 'react-router-dom'
import DashBoard from './dashboard/Dashboard';
import Notification from './dashboard/Notification'
import StudentsList from './StudentsList'
import MentorsList from './MentorsList'
import ProjectDetails from './dashboard/projects/ProjectDetails'

class App extends React.Component{
    render(){
        return(            
            
            <BrowserRouter>
            <div id="container" className="bg-dark" style={{"height":"100vh", "overflow":"auto"}}>
                <NavBar/> 
                <div style={{"height":"100vh", "overflow":"auto"}}>    
                <Route path='/projects/:id' component={ProjectDetails}/>             
                <Route exact path='/' component={DashBoard}/>
                <Route path='/createproject' component={CreateProject}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/logout' component={SignOut}/>
                <Route path='/notification' component={Notification}/>
                <Route path='/mentors' component={MentorsList}/>
                <Route path='/students' component={StudentsList}/>
                
                </div>
                </div>
            </BrowserRouter>
                       
        );
    }
}


export default App;
import React from 'react';
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux'

class DashBoard extends React.Component{
    render(){
        console.log(this.props);
        console.log(this.props.auth.authenticated);
        if(!this.props.auth.authenticated){
           
        }
        return(
            <div className="row">
            <ProjectList projects={this.props.projects}/>
            <Notifications/>
             </div>
                
        );
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    let isAuth=false;
    if(state.users.loggedin){
        console.log("%%%%loged in%%%%");
        isAuth=true;
    }
    const updatedState={
        ...state,
        projects:state.projects.projectList,
        auth:{authenticated:isAuth,uuid: null}
    };
    console.log(updatedState);
    return updatedState;
}
export default connect(mapStateToProps)(DashBoard);


import React from 'react'
import {connect}  from 'react-redux'
import {getProjects} from '../../actions/ProjectActions'
class UserNotifications extends React.Component{

   
    getPendingProj=()=>{
        console.log(this.props);
        console.log(this.props.LoginReducer.loginuser);
        console.log(this.props.LoginReducer.loginusertype);
        this.props.getProjects(this.props.LoginReducer.loginuser,this.props.LoginReducer.loginusertype);
        console.log(this.props);
    }

    render(){
        console.log(this.props);
        console.log(this.props.projReducer.projects.length);
        var showUserNotification=this.props.projReducer.projects.length>0?"show":""
        return(
            <div className= {`btn-group ${showUserNotification}`}>
            <button type="button" onClick={this.getPendingProj} className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                actions
            </button>
            <div className={`dropdown-menu dropdown-menu-right ${showUserNotification}`}>
            {this.props.projReducer.projects.map(project=>
                project.status===null?<button className="dropdown-item" type="button">{project.id}</button>:""
            )}                              
            </div>
            </div>
        );
    }

}

const mapStateToProps=(state)=>{
    return state;
}

export default connect(mapStateToProps,{getProjects})(UserNotifications);
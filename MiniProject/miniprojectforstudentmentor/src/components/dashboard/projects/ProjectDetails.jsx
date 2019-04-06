import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getProject,updateProject} from '../../../actions/ProjectActions'
class ProjectDetails extends React.Component{

    performAction=(event,status)=>{
        console.log(this.props.project);
        var updateProjectByMentor={};
        updateProjectByMentor["id"]=this.props.project.id;    
        updateProjectByMentor["status"]=status;
        // updateProjectByMentor["name"]=null;
        // updateProjectByMentor["subject"]=null;
        // updateProjectByMentor["description"]=null;
        // updateProjectByMentor["mentor"]=null;
        // updateProjectByMentor["students"]=null;
        console.log(updateProjectByMentor);
        this.props.updateProject(this.props.project.id,updateProjectByMentor)
    }

    render(){
    console.log(this.props);
    const {id,name,subject,createdDate,description,mentor,students,status}=this.props.project;
    var actions;
    if(this.props.LoginReducer.loginusertype==='mentor_user'&& status!=="accepted" && status!=="rejected"){
        actions=(
            <div className="mt-2">
            <button type="button" onClick={(event)=>this.performAction(event,"accepted")} className="btn btn-success mr-2">Accept</button>
            <button type="button" onClick={(event)=>this.performAction(event,"rejected")} className="btn btn-danger mr-2">Reject</button>            
            </div>
        );
    }
    if(this.props.LoginReducer.loginusertype==='student_user'&& status!=="accepted" && status!=="rejected"){
        actions=(
            <div className="mt-2">         
            <button type="button" className="btn btn-primary mr-2">Delete</button>
            </div>
        );
    }

    var statuscolorcoding=status==="accepted"?"bg-success":(status==="rejected"?"bg-danger":"bg-warning")
    statuscolorcoding="card mb-1 mt-2 "+statuscolorcoding;
    return(
             
        <div id="container" >
            <div className={statuscolorcoding} style={{width:"70%",marginLeft:"15%",marginRight:"15%"}}>
            <div className="card-header">{name}</div>
            <div className="card-body">
                <h5 className="card-title">Status:{status}</h5>
                <p className="card-text">Id: {id}</p>
                <p className="card-text">Subject: {subject}</p>
                <p className="card-text">Description: {description}</p>
                <p className="card-text">Mentor: {mentor.id}</p>
                <p className="card-text">Students: {students.map(student=>student.id +" , ")} </p>
                <p className="card-text"><small>Created on {createdDate}</small></p>              
                <div><Link to={'/'}>Back to DashBoard</Link></div>
                
                {actions}
                
            </div>
            </div>
        </div>
             
    )};

}

const mapStateToProps=(state,ownprops)=>{
    console.log(ownprops.match.params.id);
    console.log(state);
    const project=state.projReducer.projects.filter(project=>project.id===ownprops.match.params.id)
    return {...state,project:project[0]}
}

// const mapDispatchToProps=(dispatch)=>{
//     return{
//         getProjectDetails:(id)=>{
//             dispatch({type:"GET_PROJECT","id":id});
//         }
//     }
// }

export default connect(mapStateToProps,{getProject,updateProject})(ProjectDetails);
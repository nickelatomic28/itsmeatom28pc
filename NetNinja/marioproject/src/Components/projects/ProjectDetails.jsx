import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class ProjectDetails extends React.Component{

    deleteSelectedProject=(projectid)=>{
        console.log("projectid:===="+projectid);
        this.props.deleteProject(projectid);
        this.props.history.push('/');
    }
    
    render(){
        console.log(this.props);
        console.log(this.props.project.projectid)
        //console.log(this.props.match.params.projectid);
        const {projectid,name,subject,details}=this.props.project;
        return(
            <div className="mt-2 card" style={{width: '80%'}}>
                    <div className="card-body ">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{subject}</h6>
                        <p className="card-text">{details}</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title </cite></footer>
                        <button onClick={()=>this.deleteSelectedProject(this.props.project.projectid)} className="btn btn-primary">Delete</button>
                        <div><Link to={'/'}>Back to DashBoard</Link></div>
                    </div>
                    </div>
        );
    }

}

const mapStateToProps=(state,ownprops)=>{
    console.log(ownprops.match.params.projectid);
    console.log(state);
    const project=state.projects.projectList.find((project)=>{
        return project.projectid==ownprops.match.params.projectid;
    });
    console.log(project);
    return {...state,"project":project}

}
const mapDispatchToProps=(dispatch)=>{
   
    return {
        deleteProject:(projectid)=>{
            dispatch({type:"DELETE_PROJECT",projectid:projectid});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectDetails);
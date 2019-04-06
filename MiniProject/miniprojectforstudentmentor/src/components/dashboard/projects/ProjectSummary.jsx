import React from 'react';
import {Link} from 'react-router-dom'

const ProjectSummary=(props)=>{


    console.log(props);
    const {name,subject,createdDate}=props.project;
    console.log(name);
    console.log(props.project.id);
    const id=props.project.id;
    const link ="/projects/"+id
    var statusColorCodeForPS=props.project.status==="accepted"?"bg-success":(props.project.status==="rejected"?"bg-danger":"bg-warning")
    statusColorCodeForPS="float-right "+statusColorCodeForPS
    return(            
        <div id="container">
            <div className="card text-white bg-secondary mb-1" style={{'maxWidth': '30rem'}}>
            <div className="card-header">
            <Link className="navbar-brand" style={{color:"black"}} to={"/projects/"+id}>{name}</Link>
            <span className={statusColorCodeForPS} style={{height: "25px",width: "25px", "borderRadius": "50%",display: "inline-block"}}></span>
            </div>
            <div className="card-body">
                {/* <h5 className="card-title">Secondary card title</h5> */}
                <p className="card-text">{subject}</p>
                <p className="card-text"><small>Created on {createdDate}</small></p>              
            </div>
            </div>
        </div>
    );
}

export default ProjectSummary;


import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList=(props)=>{
    console.log(props);
    console.log(props.projects);
    return(        
        <React.Fragment>
            {props.projects.map(project=><ProjectSummary key={project.id} project={project}/>)}
        </React.Fragment>
    );
}

export default ProjectList;
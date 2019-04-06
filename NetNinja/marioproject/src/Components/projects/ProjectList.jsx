import React from 'react'
import ProjectSummary from './ProjectSummary';



class ProjectList extends React.Component{
    render(){
        console.log(this.props);
        console.log(this.props.projects);
        return(
            <div>
            { this.props.projects.length!=0?
                this.props.projects.map((project,key=project.projectid)=>(<ProjectSummary key={project.projectid} projSummary={project}/>))
                :
                <div className="row ml-2">
                <div className="col">
                   <div className="mt-2 card" style={{width: '500px',height:'170px','textAlign':'center'}}>
                   <span style={{'marginTop':'60px'}}>NO Projects are available</span>
                   </div>                    
                    </div>                       
                    </div>
                }            
            
            </div>
        );
    }
}



export default ProjectList;
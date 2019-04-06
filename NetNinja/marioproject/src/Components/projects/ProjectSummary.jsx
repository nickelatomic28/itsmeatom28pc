import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class ProjectSummary extends React.Component{

    getProjectbyId=()=>{

    }
    
    render(){
        console.log(this.props);
        const {projectid,name,subject,details}=this.props.projSummary;
        return(
            <div className="row ml-2">
                <div className="col">
                   <div className="mt-2 card" style={{width: '80%'}}>
                    <Link to={"/projects/"+projectid}>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{subject}</h6>
                        <p className="card-text">{details}</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </div>
                    </Link>
                    </div>                    
                   </div>                       
             </div>
        );
    }
}

// const mapsDispatchToProps=(dispatch)=>{
//     return {
//         getProjectById:(projectid)=>{            
//                 dispatch({"type":"GET_PROJECT","id":projectid});
//             } 
//     };
// }

export default ProjectSummary;
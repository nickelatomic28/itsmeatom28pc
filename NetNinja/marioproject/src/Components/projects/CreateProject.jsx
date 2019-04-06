import React from 'react';
import {connect} from 'react-redux'


class CreateProject extends React.Component{

    createProjectFormSubmit=(event)=>{
         console.log("createProjectFormSubmit");
         console.log(this.props);
         event.preventDefault();         
        const project={
            projectid:Math.floor(new Date().valueOf() * Math.random())
        }
        for(var i=0;i<event.target.length-1;i++){
            project[event.target[i].id]=event.target[i].value           
        }
        this.props.addProject(project);
        this.props.history.push('/');
    }
    render(){
        return(
            <div >
                <form onSubmit={(event)=>this.createProjectFormSubmit(event)}> 
                    <div className="form-group">
                        <label htmlFor="name">Project Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Project name"/>                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" className="form-control" id="subject" placeholder="Project Subject"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="details">Details</label>
                        <textarea  type="textarea" className="form-control" id="details" placeholder="Project Details goes here"/>
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Create Project</button>
                    </form>
                
                </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {...state};
}
const mapDispatchToProps=(dispatch)=>{
    console.log("In side AddNinja jsx DISPATCH TO PROPS FUNCTION")
    return{
        addProject:(project)=>{
            dispatch({type:"ADD_PROJECT",project:project})
        } 
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);
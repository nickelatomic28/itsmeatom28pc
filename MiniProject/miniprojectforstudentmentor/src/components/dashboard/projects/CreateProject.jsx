import React from 'react';
import {connect} from 'react-redux'
import {getMentors} from '../../../actions/MentorActions'
import {getStudents} from '../../../actions/StudentActions'
import {newProject} from '../../../actions/ProjectActions'

class CreateProject extends React.Component{

    
    formSubmit=(event)=>{
        event.preventDefault();
        console.log(this.props.LoginReducer.loginuser);
        var project={};
        for(var i=0;i<event.target.length-1;i++){
            if(event.target[i].id==="mentor"){
                var mentor={};                
                mentor["id"]=event.target[i].value;
                project[event.target[i].id]=mentor;
            }else  if(event.target[i].id==="students"){
                var students=[];
                for(var j=0;j<event.target[i].options.length;j++){
                    if(event.target[i].options[j].selected){
                        console.log(event.target[i].options[j].value);
                        var student={};                
                        student["id"]=event.target[i].options[j].value;
                        students.push(student)
                        console.log(students);
                    }
                } 
                project[event.target[i].id]=students;
            }
            else{
                project[event.target[i].id]=event.target[i].value;
            }           
        }
        var currentDate=new Date();
        project['createdDate']=currentDate.getDate()+'/'+currentDate.getMonth()+1+'/'+currentDate.getFullYear();
        console.log(project);        
        this.props.newProject(this.props.LoginReducer.loginuser,project)
    }
    render(){
        console.log(this.props.LoginReducer.loginuser);
        console.log(this.props.MentsReducer.mentors);
    return(        
        <div className="w-50 h-500 rounded container border mt-5 bg-light">
                <form onSubmit={this.formSubmit} className="p-4">
                        <div className="form-group row ">
                            <label className="col-sm-2 col-form-label" htmlFor="id">Project Id</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="id"  placeholder="Enter project id"/>   
                            </div>                
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="name"  placeholder="Enter project name"/>    
                            </div>                
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="subject">Subject</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="subject"  placeholder="Enter Subject here"/>   
                            </div>                                     
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="description">Description</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="description" placeholder="Write Project description here"/>                           
                            </div> 
                        </div>   
                        
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="mentor">Mentor</label>
                            <div className="col-sm-10">
                                <select onFocus={()=>this.props.getMentors()} id="mentor" className="custom-select">
                                <option value>Select a mentor to guide the project</option>   
                                {this.props.MentsReducer.mentors.map((mentor)=>
                                    <option key={mentor.id} value={mentor.id}>{mentor.id}</option>
                                    )}                                                                              
                                </select>
                            </div>    
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="students">Students</label>
                            <div className="col-sm-10">
                            <select onFocus={()=>this.props.getStudents()} id="students" className="custom-select" multiple>                                   
                                    {this.props.StudsReducer.students.map(student=>student.id!==this.props.LoginReducer.loginuser?
                                     <option  key={student.id} value={student.id}>{student.id}</option>:""
                                    )}                                   
                             </select>    
                            </div>    
                        </div>              
                             
                        <button  type="submit" className="btn btn-primary">Create</button>
                </form>
                </div>
    );
}
 
}



const mapStateToProps=(state)=>{
    console.log(state);
    return {...state};
}

export default connect(mapStateToProps,{newProject,getMentors,getStudents})(CreateProject);
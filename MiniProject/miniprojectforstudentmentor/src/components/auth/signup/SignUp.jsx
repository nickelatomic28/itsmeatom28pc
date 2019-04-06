import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MentorSpecificForm from "./MentorSpecificForm"
import StudentSpecificForm from "./StudentSpecificForm"
import {addMentor} from '../../../actions/MentorActions'
import {addStudent} from '../../../actions/StudentActions'
import {setSignUpFlag,setUpdatedDate} from '../../../actions/SignUpActions'
import {connect} from 'react-redux'
import ErrModal from '../../modals/ErrModal'
class SignUp extends React.Component{   
 
    signupFormSubmit=(event)=>{
        var type=null;
        var tempid=null;
        event.preventDefault();
        console.log("signupFormSubmit");       
        const obj={};
         for(var i=0;i<event.target.length-1;i++){
             if(event.target[i].id!=="student"&&event.target[i].id!=="mentor"){
                obj[event.target[i].id]=event.target[i].value;
                if(event.target[i].id==="standard"){
                    type="student"
                }else if(event.target[i].id==="experience"){
                    type="mentor"
                }
                if(event.target[i].id==="id"){
                    tempid=event.target[i].value;
                }
             }
            
         }
         console.log(type);
         console.log(obj);            
         console.log(tempid);

         if(type==="mentor"){
            this.props.addMentor(obj);
            console.log(this.props);
         }else if(type==="student"){
            this.props.addStudent(obj);
            //console.log(this.props);
            //this.props.history.push('/login')
            // this.props.StudsReducer.students.map(student=>{
            //     if(student.id===tempid){
            //         setTimeout(() => {
            //             this.props.history.push('/login')
            //         }, 2000);
            //     }});
         }       
                
    }
   
    render(){           
        console.log(this.props);
        var ErrorModal="";
        if(this.props.ErrReducer.errormessage!=null&&this.props.ErrReducer.errormessage!==""){
            ErrorModal=<ErrModal message={this.props.ErrReducer.errormessage}/>;
        }
       
        const StudentForm=<StudentSpecificForm/>;
        const MentorForm=<MentorSpecificForm/>;   
        var s_m_type=null;
        if(this.props.SupReducer.signupflag==="student"){
            s_m_type=StudentForm;
        }else if(this.props.SupReducer.signupflag==="mentor"){
            s_m_type=MentorForm;
        }

        return(                 
                
            <div className="w-50 rounded container border mt-5 bg-light">
                {ErrorModal}
                <form onSubmit={(event)=>this.signupFormSubmit(event)} className="p-4">
                        <div className="form-group row ">
                            <label className="col-sm-2 col-form-label" htmlFor="id">Id</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="id"  placeholder="Enter id" />   
                            </div>                
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="firstname">First Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="firstname"  placeholder="Enter first name"/>    
                            </div>                
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="lastname">Last Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="lastname"  placeholder="Enter last name"/>   
                            </div>                                     
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="dob">DOB</label>
                            <div className="col-sm-10">
                            <DatePicker  id="dob" selected={this.props.SupReducer.updatedDate} onChange={this.props.setUpdatedDate}/>
                            {/* <input type="text" className="form-control" id="dob"  placeholder="Enter date of birth"/>      
                                    */}
                                    </div> 
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="emailid">EmailId</label>
                            <div className="col-sm-10">
                            <input type="email" className="form-control" id="emailid" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div> 
                        </div>   
                        
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="student">Type</label>
                            <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                            <input onChange={()=>this.props.setSignUpFlag("student")}  className="form-check-input" type="radio" name="type" id="student"  />
                            <label className="form-check-label" htmlFor="inlineRadio1">Student</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input onChange={()=>this.props.setSignUpFlag("mentor")}  className="form-check-input" type="radio" name="type" id="mentor"   />
                            <label className="form-check-label" htmlFor="mentor">Mentor</label>
                            </div>
                            </div>                    
                        </div>                         
                       {s_m_type}         
                      
                </form>
                
                </div>              
                
        );
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {...state};
}

export default connect(mapStateToProps,{setSignUpFlag,setUpdatedDate,addMentor,addStudent})(SignUp);
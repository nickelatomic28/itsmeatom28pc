import React from 'react'
import {connect} from 'react-redux'
import {getStudents,deleteStudent} from '../actions/StudentActions'
import ErrorModal from './modals/ErrModal'
class StudentsList extends React.Component{

    componentDidMount(){
        this.props.getStudents();
    }

    render(){
        var errModal="";
        if(this.props.ErrReducer.errormessage!=""){
           return errModal=<ErrorModal message={this.props.ErrReducer.errormessage}/>
        }

        console.log(this.props);
        
        return(            
            <table className="table table-sm bg-light align-middle" style={{"width":"70%", "marginLeft":"15%","marginRight":"15%","marginTop":"5%","borderRadius":"10px" }}>
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Password</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email id</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Standard</th>
                        <th scope="col">Projects</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>                       
                            {this.props.StudsReducer.students.map(student=>
                            <tr key={student.id}>
                            <td>{student.password}</td>
                            <td>{student.id}</td>
                            <td>{student.firstname}</td>
                            <td>{student.lastname}</td>
                            <td>{student.emailid}</td>
                            <td>{student.dob}</td>
                            <td>{student.standard}</td>   
                            <td>{student.projects!==undefined&&student.projects!==null?student.projects.map(project=>project.id+","):""}</td> 
                            <td><button onClick={()=>this.props.deleteStudent(student.id)} title="Student can be deleted only if he is not associated to any project" className="btn btn-danger">X</button></td>                           
                            </tr>
                            )}                  
                    </tbody>
                    </table>

        )};
}

const mapStateToProps=(state)=>{
    return state;
}

export default connect(mapStateToProps,{getStudents,deleteStudent})(StudentsList);

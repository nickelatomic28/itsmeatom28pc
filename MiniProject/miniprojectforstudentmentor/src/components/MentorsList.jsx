import React from 'react';
import {connect} from 'react-redux'
import {getMentors,deleteMentor} from '../actions/MentorActions'
import ErrModal from './modals/ErrModal'
class MentorsList extends React.Component{

    componentDidMount(){
        this.props.getMentors();
    }
    render(){
        console.log(this.props);
        var keys=[];
        {this.props.MentsReducer.mentors.map(mentor=>{
            for(var key in mentor){                
                keys.push(key);               
            }
        })}  
        console.log(keys);
        var fillteredKey=keys.filter((item,pos)=>{
           return keys.indexOf(item)==pos;
        });
       console.log(fillteredKey);

        var errorModal=<ErrModal message={this.props.ErrReducer.errormessage}/>
        if(this.props.ErrReducer.errormessage!=""){
            return errorModal;
        }
        
    return(
        <table className="table table-sm bg-light align-middle" style={{"width":"70%", "marginLeft":"15%","marginRight":"15%","marginTop":"5%","borderRadius":"10px" }}>
                <thead>
                    <tr>                     
                    <th scope="col">Id</th>
                    <th scope="col">password</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email id</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Experience</th>
                    <th scope="col">Delete</th>                    
                    </tr>
                </thead>
                <tbody>
                    {this.props.MentsReducer.mentors.map((mentor)=>(                        
                        <tr key={mentor.id}>
                        <td scope="row">{mentor.id}</td>
                        <td >{mentor.password}</td>
                        <td>{mentor.firstname}</td>
                        <td>{mentor.lastname}</td>
                        <td>{mentor.emailid}</td>
                        <td>{mentor.dob}</td>
                        <td>{mentor.experience}</td>                        
                        <td><button onClick={()=>this.props.deleteMentor(mentor.id)} title="Mentors will be deleted only if they are not associated to any projects" className="btn btn-danger">X</button></td>
                        </tr>
                    ))}
                  
                </tbody>
                </table>

    )};
}

const mapStateToProps=(state)=>{
    return {...state}
}


export default connect(mapStateToProps,{getMentors,deleteMentor})(MentorsList);
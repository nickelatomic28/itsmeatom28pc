import React from 'react';
import ProjectList from './projects/ProjectList'
import Notification from '../dashboard/Notification'
import {connect} from 'react-redux'
import {getProjects} from '../../actions/ProjectActions'
import StudentsList from '../StudentsList'
class DashBoard extends React.Component{

    componentDidMount(){
        console.log(this.props);
        console.log(this.props.LoginReducer.loginuser);
        console.log(this.props.LoginReducer.loginusertype);
        this.props.getProjects(this.props.LoginReducer.loginuser,this.props.LoginReducer.loginusertype);
        console.log(this.props);        
    }

    render(){ 
      
        console.log(this.props.projReducer.projects);
    return(        
        <div id="container" className="row justify-content-around ">            
        <div id="container" className="column mt-2 ml-2 mr-2">            
        <ProjectList projects={this.props.projReducer.projects}/>
        {/* {dashboardLeftPanel} */}
        </div>
        <div id="container" className="column">        
        </div>
        <div id="container" className="column mt-2 ml-2 mr-2">
        <Notification/>
        </div>
        </div>
    )};
}

const mapStateToProps=(state)=>{
    console.log(state);
    return state;
}

// const mapDispatchtoProps=(dispatch)=>{

//     return {
//         getProjects:()=>{
//             dispatch({"type":"GET_PROJECTS"});
//         }
//     }

// }

export default connect(mapStateToProps,{getProjects})(DashBoard);
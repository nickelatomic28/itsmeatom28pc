import {GET_PROJECTS,CREATE_PROJECT,POST_ERROR, PATCH_PROJECT, DELETE_PROJECT, GET_PROJECT, GET_PENDINGACTION_PROJECTS} from './types'
import axios from 'axios'
import { postError } from './ErrorActions';

export const getProjects=(id,type)=>dispatch=>{
    console.log(id);
    console.log(type);
    if(id!=null&&type==="student_user"){
        axios.get('/api/students/'+id+'/projects').then(res=>{
            dispatch({
                "type":GET_PROJECTS,
                "projects":res.data
            })
        }).catch(error=>{
            console.log(error);
            dispatch({
                type:POST_ERROR,
                errormessage:error.message
            })
        })
    }else if(id!=null&&type==="mentor_user"){
        axios.get('/api/mentors/'+id+'/projects').then(res=>{
            dispatch({
                "type":GET_PROJECTS,
                "projects":res.data
            })
        }).catch(error=>{
            console.log(error);
            dispatch({
                type:POST_ERROR,
                errormessage:error.message
            })
        })
    }else{
        axios.get('/api/projects').then(res=>{
            dispatch({
                "type":GET_PROJECTS,
                "projects":res.data
            })
        }).catch(error=>{
            console.log(error);
            dispatch({
                type:POST_ERROR,
                errormessage:error.message
            })
        })
    }
}


export const newProject=(id,project)=>dispatch=>{
    console.log(id);
    console.log(project);
    axios.post('/api/students/'+id+'/projects',project).then(res=>{
        console.log(res)
        dispatch({
            type:CREATE_PROJECT,
            project:project
        })
    }).catch(error=>{
        console.log(error);
        dispatch({
            type:POST_ERROR,
            errormessage:error.message
        })        
    })
}


export const updateProject=(id,project)=>dispatch=>{
    console.log(id);
    console.log(project);
    axios.patch('/api/projects/'+id,project).then(res=>{
        console.log(res)
        dispatch({
            type:PATCH_PROJECT,
            project:res.data
        })
    }).catch(error=>{
        console.log(error);
        dispatch({
            type:POST_ERROR,
            errormessage:error.message
        }) 
    })
}

export const deleteProject=(id)=>dispatch=>{
    console.log(id);    
    axios.patch('/api/projects/'+id).then(res=>{
        console.log(res)
        dispatch({
            type:DELETE_PROJECT,
            id:id
        })
    }).catch(error=>{
        console.log(error);
        dispatch({
            type:POST_ERROR,
            errormessage:error.message
        }) 
    })
}

export const getProject=(id)=>{
    return{
        type:GET_PROJECT,
        id:id
    }
} 


export const getPendingActionProjects=(id)=>dispatch=>{
    console.log(id);
    axios.get('/api/mentors/'+id).then(res=>{
        console.log(res);
        console.log(res.data);
        dispatch({
            type:GET_PENDINGACTION_PROJECTS,
            pendingprojects:res.data
        })
    }).catch(error=>{
        dispatch({
            type:POST_ERROR,
            errormessage:error.message
        })
    })


}
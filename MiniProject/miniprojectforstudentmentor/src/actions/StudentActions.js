import {GET_STUDENTS,DELETE_STUDENT,POST_STUDENTS, GET_STUDENT,DATA_LOADING, POST_ERROR} from './types'
import axios from 'axios'


export const getStudents=()=>dispatch=>{
    dispatch(dataLoading());

    axios.get('/api/students').then(res=>
        
    setTimeout(()=>{
        console.log(res.data);
        dispatch({
            type:GET_STUDENTS,
            payload: res.data
        })
    },3000)
    ).catch(error=>{
        console.log(error);             
            dispatch( {
                type:POST_ERROR,
                errormessage:error.message
            })  
    })
    // return{
    //     type:GET_STUDENTS
    // }
}

export const getStudent=(id)=>{
    return{
        type:GET_STUDENT,
        id:id
    }
}


export const deleteStudent=(id)=>dispatch=>{
    axios.delete('/api/students/'+id).then(res=>{
        dispatch({
            type:DELETE_STUDENT,
            id:res.data
        })
    }).catch(error=>{
        console.log(error);
        dispatch({
            type:POST_ERROR,
            errormessage:error.message
        })
    })        
    
}

export const addStudent=(student)=>dispatch=>{
    console.log("add student actions");

    var errormessage="";
    axios.post('/api/students',student).then(
        res=>{                         
            dispatch({
                type:POST_STUDENTS,
                student:res.data
            })
            dispatch({
                    type:POST_ERROR,
                    errormessage:"registered successfull"
                }) 
            
         }).catch(error=>{ 
             console.log(error);             
            dispatch( {
                type:POST_ERROR,
                errormessage:error.message
            })           
            console.log("error dispatched");     
         })
         
        
    // return {
    //     type:POST_STUDENTS,
    //     student:student
    // }
}

export const dataLoading=()=>{
    return  {
         type:DATA_LOADING         
     }
 }
import {GET_MENTORS,GET_MENTOR,PUT_MENTOR,POST_MENTORS,DELETE_MENTOR,POST_ERROR,MENTORS_DATA_LOADING    } from '../actions/types'
import axios from 'axios'


export const getMentors=()=>dispatch=>{
    console.log("getMentors method");
    dispatch(mentorsDataLoading());
    axios.get('/api/mentors').then(res=>{
        dispatch({
            "type":GET_MENTORS,
            "mentors":res.data
        })        
    }).catch(error=>{
        dispatch({
            "type":POST_ERROR,
            errormessage:error.message
        })
    })
    // return {
    //     "type":GET_MENTORS
    // }
}

export const addMentor=(mentor)=>dispatch=>{
    console.log("addMentor method");
    console.log(mentor);
    axios.post('/api/mentors',mentor).then(res=>{
        console.log(res);
        dispatch({
            type:POST_MENTORS,
            mentor:res.data
        })
        dispatch({
            type:POST_ERROR,
            errormessage:"User registered Successfull"
        })
    }).catch(error=>{
        console.log(error);
        dispatch({
            type:POST_ERROR,
            errormessage:error.message
        })
    })    
}

export const deleteMentor=(id)=>dispatch=>{
    console.log("deleteMentor method");
    console.log(id);
    axios.delete('/api/mentors/'+id).then(res=>{
        console.log(res.data);
        dispatch({
            "type":DELETE_MENTOR,
            "id":res.data
        })
    }).catch(error=>{
        console.log(error);
        dispatch({
            "type":POST_ERROR,
            "errormessage":error.message
        })
    })
    // return{
    //     "type":DELETE_MENTOR,
    //     "id":id
    // }
}

export const mentorsDataLoading=()=>{
    console.log("mentors data loading");
    return{
        "type":MENTORS_DATA_LOADING,
        "dataloading":true
    }
}
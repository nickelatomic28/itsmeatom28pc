import {LOGIN_ACTION,LOGOUT_ACTION,GET_STUDENTS, POST_ERROR} from './types'
import axios from 'axios'

export const loginActions=(loginRequest)=>dispatch=>{   
      console.log("in loginactions");

    axios.post('/api/login',loginRequest).then(authResp=>{
        console.log(authResp);
        console.log(authResp.data);
       dispatch({
            type:LOGIN_ACTION,
            loginflag:authResp.data.flag,
            loginuser: authResp.data.flag?loginRequest.id:null,
            loginusertype:authResp.data.flag?authResp.data.type:null,
        })             
    }).catch(error=>{
        dispatch({
            type:POST_ERROR,
            errormessage:error.message
        })
    })

}

export const logoutAction=()=>{
    return{
        type:LOGOUT_ACTION
    }
}
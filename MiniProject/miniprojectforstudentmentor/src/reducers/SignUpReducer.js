import {SET_SIGNUP_FLAG,SET_UPDATED_DATE} from '../actions/types'


const initiatState={
    signupflag:null,
    updatedDate:null    
}

const SignUpReducer=(state=initiatState,action)=>{
    console.log(state);
    if(action.type===SET_SIGNUP_FLAG){
        console.log("SET_SIGNUP_FLAG");
        console.log(action.signupflag)
        return {...state,signupflag:action.signupflag};
    }else if(action.type===SET_UPDATED_DATE){
        console.log("SET_UPDATED_DATE");
        console.log(action.updatedDate)
        return {...state,updatedDate:action.updatedDate};
    }else{
        return state;
    }
}

export default SignUpReducer;
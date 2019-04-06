import {SET_SIGNUP_FLAG,SET_UPDATED_DATE} from './types'



export const setSignUpFlag=(signupflag)=>{
    return{
        "type":SET_SIGNUP_FLAG,
        "signupflag":signupflag
    }
}


export const setUpdatedDate=(updatedDate)=>{
    return{
        "type":SET_UPDATED_DATE,
        "updatedDate":updatedDate
    }
}


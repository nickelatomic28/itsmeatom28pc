import {LOGIN_ACTION, LOGOUT_ACTION} from '../actions/types'

const initialState={
    loginflag:null,
    loginuser:null,
    loginusertype:null
}


const LoginFormReducer=(state=initialState,action)=>{
    console.log("LoginFormReducer");
    console.log(state);
    switch(action.type){
        case LOGIN_ACTION:
            console.log(LOGIN_ACTION);
            console.log(action.loginflag)
            console.log(action.loginuser)
            console.log(action.loginusertype)
            state.loginflag=action.loginflag;
            state.loginuser=action.loginuser;
            state.loginusertype=action.loginusertype;
            return state;
        case LOGOUT_ACTION:
            console.log("LOGOUT_ACTION");
            state.loginflag=null;
            state.loginuser=null;
            state.loginusertype=null;
            return state;
        default:
            console.log("default");
            return state;
    }
}

export default LoginFormReducer;
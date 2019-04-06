import {POST_ERROR,CLOSE_ERROR} from '../actions/types'

const initialState={
    errormessage:""
}

const ErrorReducer=(state=initialState,action)=>{
    console.log(state);
    switch(action.type){
        case POST_ERROR:
        console.log("POST_ERROR");
        console.log(action.errormessage);
          return {errormessage:action.errormessage};
        case CLOSE_ERROR:
        console.log("CLOSE_ERROR");
            return {errormessage:""}
        default:
        return state;
    }
}

export default ErrorReducer;
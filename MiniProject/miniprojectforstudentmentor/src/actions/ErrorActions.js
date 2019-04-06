import {POST_ERROR, CLOSE_ERROR} from '../actions/types'

export const postError=(error)=>{
    return{
        type:POST_ERROR,
        errormessage:error
    }
}

export const closeError=()=>{
    return{
        type:CLOSE_ERROR
    }
}

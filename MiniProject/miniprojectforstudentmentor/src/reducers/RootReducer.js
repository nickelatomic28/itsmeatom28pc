import ProjectsReducer from './ProjectsReducer'
import StudentsReducer from './StudentsReducer'
import MentorsReducer from './MentorsReducer'
import SignUpReducer from './SignUpReducer'
import LoginFormReducer from './LoginFormReducer'
import ErrorReducer from './ErrorReducer'
import {combineReducers} from 'redux'


export const RootReducer=combineReducers({
    projReducer:ProjectsReducer,
    StudsReducer:StudentsReducer,
    MentsReducer:MentorsReducer,
    SupReducer:SignUpReducer,
    LoginReducer:LoginFormReducer,
    ErrReducer:ErrorReducer
})


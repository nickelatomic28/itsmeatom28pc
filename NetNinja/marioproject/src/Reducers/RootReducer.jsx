import { combineReducers } from "redux";
import projectListsReducer from './projectListsReducer';
import MarioUserReducer from './MarioUserReducer';
import AuthReducer from './AuthReducer'

const rootReducer = combineReducers({
    
    auth:AuthReducer,
    users:MarioUserReducer,
    projects:projectListsReducer
    
});

export default rootReducer;
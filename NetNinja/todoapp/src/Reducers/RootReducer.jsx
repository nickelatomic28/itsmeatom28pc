import { combineReducers } from "redux";
import blogPostReducer from './BlogPostReducer';
import ninjaReducer from './NinjaReducer';

const rootReducer = combineReducers({
    
    posts:blogPostReducer,
    samurais:ninjaReducer
});

export default rootReducer;
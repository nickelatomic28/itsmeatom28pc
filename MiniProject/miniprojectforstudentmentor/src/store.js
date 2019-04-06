import {createStore,applyMiddleware,compose} from 'redux';
import {RootReducer} from './reducers/RootReducer'
import thunk from 'redux-thunk'

const initialState={};
const middleware=[thunk];
const store= createStore(
    RootReducer,
    initialState,
    // compose(
    //     applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
    applyMiddleware(thunk)
);

export default store;
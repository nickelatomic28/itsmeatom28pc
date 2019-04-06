import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import TestApp from './TestApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './Reducers/RootReducer'

const store= createStore(rootReducer);

ReactDOM.render(<Provider store={store}><TestApp /></Provider>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
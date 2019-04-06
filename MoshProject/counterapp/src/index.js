import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CounterApp from './CounterApp'
import * as serviceWorker from './serviceWorker';
import Counter from './Components/counter'
import Counters from './Components/counters'
import Navigation from './Components/navigationBar'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<CounterApp />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

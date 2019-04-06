import React from 'react'
import Counters from './counters'

export default class Navigation extends React.Component{
    
    render(){
        console.log("render in navigationbar");
        return(            
            <nav className="navbar navbar-dark bg-primary">navigation component: 
            Number of counters : {this.props.listofCurrentCountersSize}
            </nav>
        );
    }
}
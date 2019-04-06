
import React from 'react';


export default class TestComponent extends React.Component{

    handleEvent=(e)=>{
        console.log(e); 
        console.log(this); 
    }
    render(){
        return(
            <button onClick={(e)=>this.handleEvent()}>Test</button>
           //<button onClick={this.handleEvent}>Test</button>
        );
    }

}

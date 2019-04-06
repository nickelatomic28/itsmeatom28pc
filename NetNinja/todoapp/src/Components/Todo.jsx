
import React from 'react';


export default class Todo extends React.Component{

    state={
        name: "nikhil",
        age: 28
    }

    setName(event){
        this.setState({name:event.target.value});
    }
    render(){
        return(
            <div>
            <h1>{this.state.name}</h1>
            <input id="name" onChange={(event)=>this.setName(event)} type="text"/>            
           
           </div>
        );
    }

}

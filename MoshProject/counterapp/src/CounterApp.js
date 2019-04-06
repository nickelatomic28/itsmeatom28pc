import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './Components/counters';
import Navigation from './Components/navigationBar'
import product1 from './product1.png';
import product2 from './product2.png';
import product3 from './product3.png';
import product4 from './product4.png';

export class CounterApp extends Component {
  
  state={
        counters :[
        { id:1,value:4},
        { id:2,value:0},
        { id:3,value:0},
        { id:4,value:0}
        ]
    };

    updateCount=(id,value)=>{  
        const updatedCounter=this.state.counters.map(counter=>counter.id==id&&value>=0?{id:id,value:value}:counter);  
        this.setState({counters: updatedCounter});
    }
    

    deleteCounter=(countername)=>{
       console.log("delete counter"+countername)
       const updatedCounter=this.state.counters.filter(counter=>counter.id!==countername);
       this.setState({counters: updatedCounter});
    }

    resetCounterValues=()=>{
        console.log("reset value");        
        const updatedCounter=this.state.counters.map(counter=>counter={id:counter.id,value:0});  
        this.setState({counters: updatedCounter});
     }


  render() {
    console.log("render in counterapp");
    return (
        <React.Fragment>
        <Navigation listofCurrentCountersSize={this.state.counters.length}/>
          
        <Counters 
        productImage={[
                <div className="mx-auto col-sm">
                <img src={product1} width="100px" height="100px" alt="asd" className="img-thumbnail m-1 p-100"/>
                </div>,
                <div className="mx-auto col-sm">
                <img src={product2} width="100px" height="100px" alt="asd" className="img-thumbnail m-1 p-100"/>
                </div>,
                <div className="mx-auto col-sm">
                <img src={product3} width="100px" height="100px" alt="asd" className="img-thumbnail m-1 p-100"/>
                </div>,
                <div className="mx-auto col-sm">
                <img src={product4} width="100px" height="100px" alt="asd" className="img-thumbnail m-1 p-100"/>
                </div>
                
        ]
        }
        countersMap={this.state.counters} 
        updateCount={this.updateCount}
        deleteCounter={this.deleteCounter}
        resetCounterValues={this.resetCounterValues}/>
        </React.Fragment>
    );
  }
}

export default CounterApp;

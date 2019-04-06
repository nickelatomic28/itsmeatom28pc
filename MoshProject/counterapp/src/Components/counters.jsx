import React from 'react';
import Counter from './counter'

export default class Counters extends React.Component{
    
    render(){
        console.log("render in counters");
        return(
            <div>
            {this.props.countersMap.map((counter)=><Counter 
            key={counter.id} 
            id={counter.id} 
            productImage={this.props.productImage}
            value={counter.value} 
            updateCount={this.props.updateCount} 
            deleteProduct={this.props.deleteCounter}/>)}            
            <button onClick={this.props.resetCounterValues} className="btn btn-primary m-1">Reset values</button>
            </div>
        );
    }

}
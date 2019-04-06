import React from 'react';
import product1 from '../product1.png'
import product2 from '../product2.png'
import product3 from '../product3.png'
import product4 from '../product4.png'

export default class Counter extends React.Component{
            
    render(){             
        console.log("render in counter-----");
        return(            
            <div>                
                {this.props.productImage[this.props.id-1]}
            <span className={this.getCounterStyleApplied()}>{this.props.value}</span>
            
            <button onClick={()=>{this.props.updateCount(this.props.id,this.props.value+1)}} className="btn btn-primary m-1">Increment</button>
            <button onClick={()=>{this.props.updateCount(this.props.id,this.props.value-1)}} className="btn btn-primary m-1">Decrement</button>
            <button onClick={()=>{this.props.deleteProduct(this.props.id)}} className="btn btn-primary m-1">Delete</button>
            </div>
        );
    }

    getCounterStyleApplied(){
        let stylestobeApplied="m-1 text-black border border-primary rounded p-1 bg-";
            stylestobeApplied+=this.props.value===0 ? "warning": "success";        
        return stylestobeApplied;
    }
}

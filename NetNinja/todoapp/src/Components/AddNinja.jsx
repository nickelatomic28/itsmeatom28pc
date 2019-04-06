import React from 'react';
import {connect} from 'react-redux'

 class AddNinja extends React.Component{

    submitNinjas=(event)=>{
        event.preventDefault();
        console.log(event.target.id);
        //(event)=>this.props.addNinjatoListFunction(event)
        const ninja={            
            name:event.target[0].value,
            age:event.target[1].value,
            belt:event.target[2].value
        };
        this.props.addNinjatoListFunction(ninja);        
    }
    render(){
        console.log("*****AddNinja*****");
        console.log(this.props);
        return(
            <div className="p-2 " style={{width:300}}>
            <span className="text-primary">Add Ninjas Form</span>

                <form onSubmit={(event)=>this.submitNinjas(event)}>
                    <div className="form-group-sm">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control-sm" id="name"/>                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="text" className="form-control-sm" id="age"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="belt">Belt</label>
                        <input type="text" className="form-control-sm" id="belt"/>   
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>                
                </div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log("In side AddNinja jsx MAP TO PROPS FUNCTION"+state)  
    return {...state} 
}

const mapDispatchToProps=(dispatch)=>{
    console.log("In side AddNinja jsx DISPATCH TO PROPS FUNCTION")
    return{
        addNinjatoListFunction:(ninja)=>{
            dispatch({type:"ADD_NINJA",ninja:ninja})
        } 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddNinja);
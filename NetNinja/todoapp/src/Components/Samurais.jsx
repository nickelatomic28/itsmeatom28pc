import React from 'react'
import {connect} from 'react-redux';

const Samurais=(props)=>{
    
    console.log("*****Samurais*****");
    console.log(props);
     const onDeleteRow=(ninjaId)=>{
        console.log(props);
        console.log("delete row:  "+ninjaId);     
        props.deleteSelectedNinja(ninjaId);  
       // props.history.push('/');      
    };

        const {samurais}=props;
        const ninjasList=samurais.map((ninja,key)=>{
            return ninja.age<100?(
                <tr key={ninja.id}> 
                        <th scope="row">{ninja.id}</th>
                        <td>{ninja.name}</td>
                        <td>{ninja.age}</td>
                        <td>{ninja.belt}</td>
                        <td><button onClick={()=>onDeleteRow(ninja.id)} className="btn btn-primary">X</button></td>
                        </tr>               
            ):null;
        });
        return(
            <div>
            <h4>Samurais list goes here</h4>   
            <table className="table table-bordered table-dark w-100">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Belt</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ninjasList}
                        </tbody>
                    </table>               
            </div>
        );    
}



const mapStateToProps=(state)=>{
    console.log("In side Samurais jsx MAP TO PROPS FUNCTION")    
    return {...state}
}

const mapDispatchToProps=(dispatch)=>{
    console.log("In side Samurais jsx DISPATCH TO PROPS FUNCTION")
  return {
      deleteSelectedNinja: (id)=>{
      dispatch({type:"DELETE_NINJA",id:id})
       } 
   };
}
export default connect(mapStateToProps,mapDispatchToProps)(Samurais);

import React from 'react'
import AddNinja from './AddNinja'
import Samurais from './Samurais'

const Home=(props)=>{
    console.log("*****Home*****");
    console.log(props);
    // setTimeout(()=>{
    //     props.history.push('/about');
    // },2000);
    return(
      <React.Fragment>          
        <AddNinja/>
        <Samurais />
        </React.Fragment>
    );
  }

  
  export default Home;
import React from 'react'


const RainBow=(WrappedComponent)=>{

    const colours=['violet','indigo','blue','green','yellow','orange','red'];

    const color=colours[Math.floor(Math.random()*6)]
    
    return(props)=>{
        return(
            <div style={{color:color}}>
            <WrappedComponent {...props}/>
            </div>
        );
    }
    
}


export default RainBow;
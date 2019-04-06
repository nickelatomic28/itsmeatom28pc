
const demostate={
    samurais:[
        {
          name:"nikhil",
          age:"30",
          belt:"black",
          id:Math.floor(new Date().valueOf() * Math.random())
        },
        {
          name:"Vinita",
          age:"25",
          belt:"pink",
          id:Math.floor(new Date().valueOf() * Math.random())
        }
      ]
};

const ninjaReducer=(state=demostate.samurais,action)=>{
    console.log("ninjaReducer reducer"+state)   
    if(action.type==="DELETE_NINJA"){
        console.log(action);        
        const updatedNinjasList=state.filter((ninja)=> ninja.id!=action.id );
        console.log(updatedNinjasList);       
        
       return updatedNinjasList;
    }else if(action.type==="ADD_NINJA"){
        console.log(action);    
        console.log("addNinjatoList");    
        const ninja=action.ninja;
        ninja.id=Math.floor(new Date().valueOf() * Math.random());
        console.log(ninja);
        
        return [...state,ninja];
    }
   
    return state;
}

export default ninjaReducer;
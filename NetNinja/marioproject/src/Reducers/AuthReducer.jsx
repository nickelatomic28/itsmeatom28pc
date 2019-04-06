

const authState={
    authenticated:false,
    uuid:null
};

const authenticateReducer=(state=authState,action)=>{
    console.log(state);
    switch(action.type){
       case 'LOGIN':
            console.log("Loggedgggggggggggg in");
            return {...state,authenticated:true} ;
            break;
       case 'LOGOUT': 
            console.log("Loggedgggggggggggg Out");
            const updatedState= {...state,authenticated:false};
            console.log(updatedState);
            return updatedState ;
            break;
       default  :
            return state;
            console.log('Sorry, we are out of ' + action.type + '.');
    }    

    return state;
}

export default authenticateReducer;
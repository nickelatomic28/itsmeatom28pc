

const initialUsers={
    marioUsers:{
        email:"nikhil.diviti@gmail.com",
        password:"vinita",
        firstname:"nikhil",
        lastname:"diviti"
      
        }
}

const marioUserReducer=(state=initialUsers,action)=>{
    console.log(state);
    console.log(action);
   
    if(action.type=="LOGIN"){
        console.log("===========inside login============");
        if(state.marioUsers.email==action.loginDetials.email && state.marioUsers.password==action.loginDetials.password){
            console.log("===========TRUE============");
            return {...state,loggedin:true}
        }        
    }else if(action.type=="LOGOUT"){
        console.log("===========inside LOGOUT============");
        console.log("===========TRUE============");
            return {...state,loggedin:false}              
    }
    return state;
}

export default marioUserReducer;
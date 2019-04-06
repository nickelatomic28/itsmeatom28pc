import {GET_MENTORS,GET_MENTOR,PUT_MENTOR,POST_MENTORS,DELETE_MENTOR,MENTORS_DATA_LOADING} from '../actions/types'

const initialState={
    dataloading:false,
    mentors:[
        // {
        //     "id": "ganga",
        //     "password": "ganga",
        //     "firstname": "ganga",
        //     "lastname": "sir",
        //     "emailid": "ganga.sir@marvel.com",
        //     "dob": "2000-04-04T00:00:00.000+0000",
        //     "experience": 4
        // },
        // {
        //     "id": "sanjay",
        //     "password": "sanjay",
        //     "firstname": "sanjay",
        //     "lastname": "rai",
        //     "emailid": "sanjay.rai@marvel.com",
        //     "dob": "2000-01-03T00:00:00.000+0000",
        //     "experience": 3
        // }
    ]
}

const MentorsReducer=(state=initialState,action)=>{
    console.log(state);
    switch(action.type){
        case GET_MENTORS:
            console.log("GET_MENTORS");
            console.log(action.mentors);
            return {mentors:action.mentors,dataloading:false};
        case DELETE_MENTOR:
            console.log("DELETE_MENTOR");
            console.log(action.id);            
            const updateState=state.mentors.filter(mentor=>mentor.id!==action.id)
            console.log(updateState);
            return {mentors:updateState};
        case POST_MENTORS:
            console.log("POST_MENTORS");
            console.log(action.mentor);
            state.mentors.push(action.mentor);
            console.log(state);
            return {...state};
        case MENTORS_DATA_LOADING:
            console.log("MENTORS_DATA_LOADING");
            return {...state,dataloading:true};            
        default :
        return state;
    }
}

export default MentorsReducer;
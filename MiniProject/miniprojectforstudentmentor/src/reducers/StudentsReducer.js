import {GET_STUDENTS,DELETE_STUDENT, POST_STUDENTS, GET_STUDENT,DATA_LOADING} from '../actions/types'

const initialState={
    dataloading:false,    
    students:[]
    // students:[
    //     {
    //       "id": "nikhil",
    //       "password": "nikhil",
    //       "firstname": "diviti",
    //       "lastname": "nikhil",
    //       "emailid": "nikhil.diviti@marvel.com",
    //       "dob": "2000-10-10T00:00:00.000+0000",
    //       "standard": 10,
    //       "projects": [
    //         {
    //           "id": "marvel",
    //           "name": "marvel leauge",
    //           "subject": "marvel leauge its a group of heros to save world",
    //           "description": "marvel leauge its a group of heros to save world from alien attacks",
    //           "createdDate": "2000-12-12T00:00:00.000+0000",
    //           "status": false,
    //           "mentor": {
    //             "id": "ganga",
    //             "password": "ganga",
    //             "firstname": "ganga",
    //             "lastname": "sir",
    //             "emailid": "ganga.sir@marvel.com",
    //             "dob": "2000-04-04T00:00:00.000+0000",
    //             "experience": 4
    //           }
    //         },
    //         {
    //           "id": "justiceleauge",
    //           "name": "justice leauge",
    //           "subject": "justice leauge its a group of heros to save world",
    //           "description": "justice leauge its a group of heros to save world from alien attacks",
    //           "createdDate": "2000-10-10T00:00:00.000+0000",
    //           "status": false,
    //           "mentor": {
    //             "id": "sanjay",
    //             "password": "sanjay",
    //             "firstname": "sanjay",
    //             "lastname": "rai",
    //             "emailid": "sanjay.rai@marvel.com",
    //             "dob": "2000-01-03T00:00:00.000+0000",
    //             "experience": 3
    //           }
    //         }
    //                     ]
    //     },
    //     {
    //       "id": "ganesh",
    //       "password": "ganesh",
    //       "firstname": "kale",
    //       "lastname": "ganesh",
    //       "emailid": "ganesh.kale@marvel.com",
    //       "dob": "2000-11-11T00:00:00.000+0000",
    //       "standard": 11,
    //       "projects": [
    //         {
    //           "id": "marvel",
    //           "name": "marvel leauge",
    //           "subject": "marvel leauge its a group of heros to save world",
    //           "description": "marvel leauge its a group of heros to save world from alien attacks",
    //           "createdDate": "2000-12-12T00:00:00.000+0000",
    //           "status": false,
    //           "mentor": {
    //             "id": "ganga",
    //             "password": "ganga",
    //             "firstname": "ganga",
    //             "lastname": "sir",
    //             "emailid": "ganga.sir@marvel.com",
    //             "dob": "2000-04-04T00:00:00.000+0000",
    //             "experience": 4
    //           }
    //         },
    //         {
    //           "id": "justiceleauge",
    //           "name": "justice leauge",
    //           "subject": "justice leauge its a group of heros to save world",
    //           "description": "justice leauge its a group of heros to save world from alien attacks",
    //           "createdDate": "2000-10-10T00:00:00.000+0000",
    //           "status": false,
    //           "mentor": {
    //             "id": "sanjay",
    //             "password": "sanjay",
    //             "firstname": "sanjay",
    //             "lastname": "rai",
    //             "emailid": "sanjay.rai@marvel.com",
    //             "dob": "2000-01-03T00:00:00.000+0000",
    //             "experience": 3
    //           }
    //         }
    //       ]
    //     },
    //     {
    //       "id": "javeed",
    //       "password": "javeed",
    //       "firstname": "hasan",
    //       "lastname": "javeed",
    //       "emailid": "javeed.hasan@marvel.com",
    //       "dob": "2000-08-08T00:00:00.000+0000",
    //       "standard": 8,
    //       "projects": [
    //         {
    //           "id": "justiceleauge",
    //           "name": "justice leauge",
    //           "subject": "justice leauge its a group of heros to save world",
    //           "description": "justice leauge its a group of heros to save world from alien attacks",
    //           "createdDate": "2000-10-10T00:00:00.000+0000",
    //           "status": false,
    //           "mentor": {
    //             "id": "sanjay",
    //             "password": "sanjay",
    //             "firstname": "sanjay",
    //             "lastname": "rai",
    //             "emailid": "sanjay.rai@marvel.com",
    //             "dob": "2000-01-03T00:00:00.000+0000",
    //             "experience": 3
    //           }
    //         }
    //       ]
    //     },
    //     {
    //       "id": "srini",
    //       "password": "srini",
    //       "firstname": "srini",
    //       "lastname": "srini",
    //       "emailid": "srini.srini@marvel.com",
    //       "dob": "2000-07-07T00:00:00.000+0000",
    //       "standard": 7,
    //       "projects": [
    //         {
    //           "id": "justiceleauge",
    //           "name": "justice leauge",
    //           "subject": "justice leauge its a group of heros to save world",
    //           "description": "justice leauge its a group of heros to save world from alien attacks",
    //           "createdDate": "2000-10-10T00:00:00.000+0000",
    //           "status": false,
    //           "mentor": {
    //             "id": "sanjay",
    //             "password": "sanjay",
    //             "firstname": "sanjay",
    //             "lastname": "rai",
    //             "emailid": "sanjay.rai@marvel.com",
    //             "dob": "2000-01-03T00:00:00.000+0000",
    //             "experience": 3
    //           }
    //         }
    //                 ]
    //     },
    //     {
    //       "id": "kotti",
    //       "password": "kotti",
    //       "firstname": "kotti",
    //       "lastname": "punyamani",
    //       "emailid": "kotti.punyamani@marvel.com",
    //       "dob": "2000-06-06T00:00:00.000+0000",
    //       "standard": 6,
    //       "projects": [
    //         {
    //           "id": "marvel",
    //           "name": "marvel leauge",
    //           "subject": "marvel leauge its a group of heros to save world",
    //           "description": "marvel leauge its a group of heros to save world from alien attacks",
    //           "createdDate": "2000-12-12T00:00:00.000+0000",
    //           "status": false,
    //           "mentor": {
    //             "id": "ganga",
    //             "password": "ganga",
    //             "firstname": "ganga",
    //             "lastname": "sir",
    //             "emailid": "ganga.sir@marvel.com",
    //             "dob": "2000-04-04T00:00:00.000+0000",
    //             "experience": 4
    //           }
    //         }
    //       ]
    //     }
    //   ]
}

const StudentsReducer=(state=initialState,action)=>{
    console.log(state);
    switch(action.type){   
        case DATA_LOADING:
        console.log("DATA_LOADING");
        return {
                ...state,
                dataloading:true
                };    
        case GET_STUDENTS:
          console.log("GET_STUDENTS");
          return {
                  ...state,
                  students:action.payload,
                  dataloading:false
                  };
        case GET_STUDENT:
          console.log("GET_STUDENT");
          console.log(action.id);
          console.log(state.students);
          return {
                  ...state,
                  dataloading:false
                  };
        case DELETE_STUDENT:
          console.log("DELETE_STUDENT");
          console.log(action.id);
          var updatedStuList = state.students.filter(student=>student.id!==action.id)
          return{students:updatedStuList}
        case POST_STUDENTS:
          console.log("POST_STUDENTS");          
          console.log(action.student);
          state.students.push(action.student)
          return state;        
        default :
          console.log("default")
          return {...state};        
    }    
}

export default StudentsReducer;
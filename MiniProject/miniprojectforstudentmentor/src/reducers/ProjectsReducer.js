import { GET_PROJECTS, CREATE_PROJECT, PATCH_PROJECT, GET_PENDINGACTION_PROJECTS } from "../actions/types";

const initialState={
    projects:[
      // {
      //   "id": "marvel",
      //   "name": "marvel leauge",
      //   "subject": "marvel leauge its a group of heros to save world",
      //   "description": "marvel leauge its a group of heros to save world from alien attacks",
      //   "createdDate": "2000-12-12T00:00:00.000+0000",
      //   "status": false,
      //   "mentor": {
      //     "id": "ganga",
      //     "password": "ganga",
      //     "firstname": "ganga",
      //     "lastname": "sir",
      //     "emailid": "ganga.sir@marvel.com",
      //     "dob": "2000-04-04T00:00:00.000+0000",
      //     "experience": 4
      //   },
      //   "students": [
      //     {
      //       "id": "nikhil",
      //       "password": "nikhil",
      //       "firstname": "diviti",
      //       "lastname": "nikhil",
      //       "emailid": "nikhil.diviti@marvel.com",
      //       "dob": "2000-10-10T00:00:00.000+0000",
      //       "standard": 10
      //     },
      //     {
      //       "id": "ganesh",
      //       "password": "ganesh",
      //       "firstname": "kale",
      //       "lastname": "ganesh",
      //       "emailid": "ganesh.kale@marvel.com",
      //       "dob": "2000-11-11T00:00:00.000+0000",
      //       "standard": 11
      //     },
      //     {
      //       "id": "kotti",
      //       "password": "kotti",
      //       "firstname": "kotti",
      //       "lastname": "punyamani",
      //       "emailid": "kotti.punyamani@marvel.com",
      //       "dob": "2000-06-06T00:00:00.000+0000",
      //       "standard": 6
      //     }
      //   ]
      // },
      // {
      //   "id": "justiceleauge",
      //   "name": "justice leauge",
      //   "subject": "justice leauge its a group of heros to save world",
      //   "description": "justice leauge its a group of heros to save world from alien attacks",
      //   "createdDate": "2000-10-10T00:00:00.000+0000",
      //   "status": false,
      //   "mentor": {
      //     "id": "sanjay",
      //     "password": "sanjay",
      //     "firstname": "sanjay",
      //     "lastname": "rai",
      //     "emailid": "sanjay.rai@marvel.com",
      //     "dob": "2000-01-03T00:00:00.000+0000",
      //     "experience": 3
      //   },
      //   "students": [
      //     {
      //       "id": "ganesh",
      //       "password": "ganesh",
      //       "firstname": "kale",
      //       "lastname": "ganesh",
      //       "emailid": "ganesh.kale@marvel.com",
      //       "dob": "2000-11-11T00:00:00.000+0000",
      //       "standard": 11
      //     },
      //     {
      //       "id": "javeed",
      //       "password": "javeed",
      //       "firstname": "hasan",
      //       "lastname": "javeed",
      //       "emailid": "javeed.hasan@marvel.com",
      //       "dob": "2000-08-08T00:00:00.000+0000",
      //       "standard": 8
      //     },
      //     {
      //       "id": "nikhil",
      //       "password": "nikhil",
      //       "firstname": "diviti",
      //       "lastname": "nikhil",
      //       "emailid": "nikhil.diviti@marvel.com",
      //       "dob": "2000-10-10T00:00:00.000+0000",
      //       "standard": 10
      //     },
      //     {
      //       "id": "srini",
      //       "password": "srini",
      //       "firstname": "srini",
      //       "lastname": "srini",
      //       "emailid": "srini.srini@marvel.com",
      //       "dob": "2000-07-07T00:00:00.000+0000",
      //       "standard": 7
      //     }
      //  ]
      //}
    ]
}

const ProjectsReducers=(state=initialState,action)=>{

    switch(action.type){
      case GET_PROJECTS:
      console.log("GET_PROJECTS");
      console.log(state);
      console.log(action.projects);
        return{...state,projects:action.projects};        
      case "GET_PROJECT":
        console.log("GET_PROJECT");
        console.log(state);
        console.log(action.id);
        const project=state.projects.filter(project=>project.id===action.id)
        console.log(project);
        return {...state,project:project[0]};     
      case CREATE_PROJECT:
        console.log("CREATE_PROJECT");       
        console.log(action.project);
        state.projects.push(action.project);        
        return state;   
      case PATCH_PROJECT:
        console.log("PATCH_PROJECT");
        console.log(action.project);
        state.projects.map(proj=>{
          if(action.project.id===proj.id){
            proj.status=project.status;
          }         
        })
        return state;
      case GET_PENDINGACTION_PROJECTS:
        console.log("GET_PENDINGACTION_PROJECTS");
        console.log(action.id);
        console.log(action.pendingprojects);        
      default :
        return state;
    }    
};

export default ProjectsReducers;
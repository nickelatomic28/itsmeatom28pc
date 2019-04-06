

const initialState={
    projectList:[
        {
            projectid:Math.floor(new Date().valueOf() * Math.random()),
            name:"comedy",
            subject:"laugh laugh",
            details: "bla bla bla adasdasda sadfasdf sadfasdf asdfasdf asdfasdf asdfasdf sadfsdfsadfasd asdfasdfasdf sdfasdf"

        },
        {
            projectid:Math.floor(new Date().valueOf() * Math.random()),
            name:"horror",
            subject:"scared scared",
            details: "mounta has hills , wrong turm bla bla bla bla"

        },
        {
            projectid:Math.floor(new Date().valueOf() * Math.random()),
            name:"thriller",
            subject:"hehehhehe",
            details: "man from the earth .. cla c asdad asdasd asdasdasd "

        }
    ]
}


const projectListsReducer=(state=initialState,action)=>{
    console.log(state);
    console.log(action);
    if(action.type=="GET_PROJECT"){
        return state;//state.projectList.filter((project)=>{project.projectid});;
    }else if(action.type=="ADD_PROJECT"){
        //state.projectList.projectList.push(action.project)
        console.log(state.projectList.push(action.project));
        return  state;
    }else if(action.type=="DELETE_PROJECT"){
        const projects=state.projectList.filter((project)=>{
            return project.projectid!==action.projectid;
        });
        console.log(state);
        console.log(projects);
        return {...state,projectList:projects};
    }
    return state;
}

export default projectListsReducer;
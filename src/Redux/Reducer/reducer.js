const initialState =  {
    todo: ["task1", "task2", "task222", "TTT222"],
    doing: ["taska", "taskb", "taskc"],
    done: ["taskx", "tasky", "taskz", "Taskx"],
}

export const firstReducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_TASK": 
            var newArray = state[action.board];
            newArray.push(action.task);
            return Object.assign( {} , state, { [action.board] : newArray } );
        default: return state;
    }
}

export const secondReducer = (state=initialState, action) => {
    switch(action.type){
        case "DELETE_TASK":
            var newArray1 = state[action.board];
            var output = newArray1.filter((e,i) => {
                if(i !== action.index){
                    return e;
                }
            })
            return Object.assign( {} , state, { [action.board] : output } );
        default: return state;
    }
}

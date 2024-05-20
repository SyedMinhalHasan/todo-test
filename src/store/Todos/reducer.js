const initialState = {
    id: "",
    name: "",
    status: ""
}

export function todosReducer(state = initialState, action) {
    switch (action.type) {
        case "FIND":
            return {
                ...state,
                todos: action.payload
            }
        case "CREATE":
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state
    }
}
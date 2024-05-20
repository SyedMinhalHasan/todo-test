import { combineReducers } from "redux";
import { todosReducer } from './Todos';

export const rootReducer = combineReducers({
    todos: todosReducer
})
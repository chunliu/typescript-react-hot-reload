import { combineReducers } from "redux";
import { IState } from "../store/configStore";
import { todos } from "./todosReducer";

export const initState: IState = {
    todos: [],
};

export const rootReducer = combineReducers({
    todos,
});

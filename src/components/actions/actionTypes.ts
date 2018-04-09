import { Action } from "redux";
import { TodoItem } from "../model/TodoItem";

export const ActionTypes = {
    INIT_STORE: "INIT_STORE",
};

export interface IInitStoreAction extends Action {
    todos: TodoItem[];
}

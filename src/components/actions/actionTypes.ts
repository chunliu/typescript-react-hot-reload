import { Action } from "redux";
import { TodoItem } from "../model/TodoItem";

export const ActionTypes = {
    INIT_STORE: "INIT_STORE",
    ADD_TODO_ITEM: "ADD_TODO_ITEM",
    COMPLETE_TODO_ITEM: "COMPLETE_TODO_ITEM",
};

export interface IInitStoreAction extends Action {
    todos: TodoItem[];
}

export interface IAddTodoAction extends Action {
    todo: TodoItem;
}

export interface ICompleteTodoAction extends Action {
    todo: TodoItem;
}

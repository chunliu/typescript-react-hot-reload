import { TodoItem } from "../model/TodoItem";
import { ActionTypes, IInitStoreAction, IAddTodoAction, ICompleteTodoAction } from "./actionTypes";

export const initStoreAction = (todos: TodoItem[]): IInitStoreAction => {
    return {type: ActionTypes.INIT_STORE, todos};
};

export const addTodoAction = (todo: TodoItem): IAddTodoAction => {
    return {type: ActionTypes.ADD_TODO_ITEM, todo};
};

export const completeTodoAction = (todo: TodoItem): ICompleteTodoAction => {
    return {type: ActionTypes.COMPLETE_TODO_ITEM, todo};
};

export const actionCreators = {
    addTodoAction,
    completeTodoAction,
};

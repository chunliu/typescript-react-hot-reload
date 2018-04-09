import { TodoItem } from "../model/TodoItem";
import { ActionTypes, IInitStoreAction } from "./actionTypes";

export const initStoreAction = (todos: TodoItem[]): IInitStoreAction => {
    return {type: ActionTypes.INIT_STORE, todos};
};
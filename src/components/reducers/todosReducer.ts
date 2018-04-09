import { Action } from "redux";
import { initState } from "./rootReducer";
import * as todoActions from "../actions/actionTypes";

export const todos = (
    state = initState.todos,
    action: Action,
) => {
    switch (action.type) {
        case todoActions.ActionTypes.INIT_STORE:
            return (action as todoActions.IInitStoreAction).todos;
        case todoActions.ActionTypes.ADD_TODO_ITEM: {
            const todoItems = state.slice();
            const todo = (action as todoActions.IAddTodoAction).todo;
            todo.id = todoItems.length;
            todo.key = todoItems.length;
            todo.isCompleted = false;
            todoItems.push(todo);
            return todoItems;
        }
        case todoActions.ActionTypes.COMPLETE_TODO_ITEM: {
            const todoItems = state.slice();
            const todo = (action as todoActions.ICompleteTodoAction).todo;
            for (const item of todoItems) {
                if (item.id === todo.id) {
                    item.isCompleted = true;
                    break;
                }
            }
            return todoItems;
        }
        default:
            return state;
    }
};

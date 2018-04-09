import { initState } from "./rootReducer";
import { IInitStoreAction, ActionTypes, IAddTodoAction, ICompleteTodoAction } from "../actions/actionTypes";

export const todos = (
    state = initState.todos,
    action: IInitStoreAction | IAddTodoAction,
) => {
    switch (action.type) {
        case ActionTypes.INIT_STORE:
            return (action as IInitStoreAction).todos;
        case ActionTypes.ADD_TODO_ITEM: {
            const todoItems = state.slice();
            const todo = (action as IAddTodoAction).todo;
            todo.id = todoItems.length;
            todo.key = todoItems.length;
            todo.isCompleted = false;
            todoItems.push(todo);
            return todoItems;
        }
        case ActionTypes.COMPLETE_TODO_ITEM: {
            const todoItems = state.slice();
            const todo = (action as ICompleteTodoAction).todo;
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

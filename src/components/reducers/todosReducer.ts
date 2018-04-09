import { initState } from "./rootReducer";
import { IInitStoreAction, ActionTypes } from "../actions/actionTypes";

export const todos = (
    state = initState.todos,
    action: IInitStoreAction
) => {
    switch(action.type) {
        case ActionTypes.INIT_STORE:
            return (action as IInitStoreAction).todos;
        default:
            return state;
    }
};

import { ApplicationState } from "./StateProvider";

export enum ActionType {
    SET_USER = 'SET_USER',
    UPDATE_OUT = 'UPDATE_OUT'
}

export type Action = { type: ActionType.SET_USER, user: firebase.User | null }
    | { type: ActionType.UPDATE_OUT, payload: string };

export const reducer = (state: ApplicationState, action: Action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.SET_USER:
            return { ...state, user: action.user };
        case ActionType.UPDATE_OUT:
            return { ...state, user: null };
        default:
            return state;
    }
};

export default reducer;
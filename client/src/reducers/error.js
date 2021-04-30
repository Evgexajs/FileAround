import { ERROR } from "../actions/actionTypes";

export function error (state = [], action) {
    switch (action.type) {
        case ERROR:
            return action.errors;
        default:
            return state;
    }
}

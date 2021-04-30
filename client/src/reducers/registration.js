import { REGISTRATION } from "../actions/actionTypes";

export function registration (state = [], action) {
    switch (action.type) {
        case REGISTRATION:
            return action.reg;
        default:
            return state;
    }
}

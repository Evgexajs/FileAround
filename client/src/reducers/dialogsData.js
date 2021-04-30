import { DIALOGS_DATA } from "../actions/actionTypes";

export function dialogsData (state = [], action) {
    switch (action.type) {
        case DIALOGS_DATA:
            return action.dialogs;
        default:
            return state;
    }
}

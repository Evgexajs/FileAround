import { MESSAGE_DATA } from "../actions/actionTypes";

export function messagesData (state = [], action) {
    switch (action.type) {
        case MESSAGE_DATA:
            return action.messages;
        default:
            return state;
    }
}

import { ADD_MESSAGE } from "../actions/actionTypes";

export function addMessage (state = [], action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return action.newMessage;
        default:
            return state;
    }
}

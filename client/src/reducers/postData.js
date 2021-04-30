import { POST_DATA } from "../actions/actionTypes";

export function postData (state = [], action) {
    switch (action.type) {
        case POST_DATA:
            return action.posts;
        default:
            return state;
    }
}

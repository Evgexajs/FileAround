import { LOGIN, LOGOUT } from "../actions/actionTypes";

const defaultState = {
    currentUser: [],
    isAuth: false
}

export function login (state = defaultState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                currentUser: action.log,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state;
    }
}

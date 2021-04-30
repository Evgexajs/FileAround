import { HIDE_LOADER, SHOW_LOADER } from "../actions/actionTypes";

const defaultState = {
    loader: false
}

export function loader(state = defaultState, action) {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                loader: true
            }
        case HIDE_LOADER:
            return {
                ...state,
                loader: false
            }
        default:
            return state;
    }
}


export const showLoader = () => ({type: SHOW_LOADER})
export const hideLoader = () => ({type: HIDE_LOADER})
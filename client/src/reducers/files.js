import { SET_VIEW, FILES_FETCH_DATA_SUCCESS, CURRENT_DIR_FETCH_DATA_SUCCESS, ADD_FILE, SET_POPUP_DISPLAY, POP_TO_STACK, PUSH_TO_STACK, DELETE_FILE } from "../actions/actionTypes";

const defaultState = {
    currentDir: null,
    files: [],
    popupDisplay: 'none',
    dirStack: [],
    view: 'list'
}

export function files (state = defaultState, action) {
    switch (action.type) {
        case FILES_FETCH_DATA_SUCCESS:
            return {
                ...state,
                files: action.payload
            }
        case CURRENT_DIR_FETCH_DATA_SUCCESS:
            return {
                ...state,
                currentDir: action.payload
            }
        case ADD_FILE:
            return {
                ...state,
                files: [...state.files, action.payload]
            }
        case SET_POPUP_DISPLAY:
            return {
                ...state,
                popupDisplay: action.payload
            }
        case POP_TO_STACK:
            return {
                ...state,
                dirStack: [...state.dirStack, action.payload]
            }
        case PUSH_TO_STACK:
            return {
                ...state,
                dirStack: [...state.dirStack, action.payload]
            }
        case DELETE_FILE:
            return {
                ...state,
                files: [...state.files.filter(file => file._id !== action.payload)]
            }
        case SET_VIEW:
            return {
                ...state,
                view: action.payload
            }
        default:
            return state;
    }
}

export const setFiles = (file) => ({type: FILES_FETCH_DATA_SUCCESS, payload: file})
export const addFile = (file) => ({type: ADD_FILE, payload: file})
export const setPopupDisplay = (display) => ({type: SET_POPUP_DISPLAY, payload: display})
export const setCurrentDir = (dir) => ({type: CURRENT_DIR_FETCH_DATA_SUCCESS, payload: dir})
export const pushToStack = (dir) => ({type: PUSH_TO_STACK, payload: dir})
export const popToStack = (dir) => ({type: POP_TO_STACK, payload: dir})
export const setFileView = (payload) => ({type: SET_VIEW, payload: payload})
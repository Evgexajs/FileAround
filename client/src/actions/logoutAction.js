import { LOGOUT } from './actionTypes'


export function Logout() {

    return (dispatch) => {
        localStorage.removeItem('token')
            dispatch({
                type: LOGOUT,
            })
    };
};
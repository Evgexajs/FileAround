import axios from 'axios';
import { LOGIN, ERROR } from './actionTypes'


export function Log(email, password) {

    return (dispatch) => {        
        axios.post('http://localhost:5000/api/auth/login', {
            email: email,
            password: password
        })
        .then(response =>{
            const log = response.data
            dispatch({
                type: LOGIN,
                log
            })
            localStorage.setItem('token', response.data.token)
        })
        .catch(error => {
            const errors = error.message
            console.log(error)
            dispatch({
                type: ERROR,
                errors
            })
        })
    };
};
import axios from 'axios';
import {REGISTRATION, ERROR} from './actionTypes'
export function Regist(name, lastName, email, password) {

    return (dispatch) => {        
        axios.post('http://localhost:5000/api/auth/registration', {
            name: name,
            lastName: lastName,
            email: email,
            password: password
        })
        .then(response =>{
            const reg = response.data
            dispatch({
                type: REGISTRATION,
                reg
            })
            console.log(response)
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
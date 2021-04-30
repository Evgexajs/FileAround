import axios from 'axios';
import { LOGIN, ERROR} from './actionTypes'


export function Auth() {

    return (dispatch) => {        
        axios.get('http://localhost:5000/api/auth/auth',
         ({headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}}))
        .then(response =>{
            const log = response.data
            dispatch({
                type: LOGIN,
                log
            })
            localStorage.setItem('token', response.data.token)
        })
        .catch(error => {
            localStorage.removeItem('token')
            const errors = error.message
            console.log(error)
            dispatch({
                type: ERROR,
                errors
            })
        })
    };
};
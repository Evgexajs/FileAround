import axios from 'axios';
import { LOGIN, ERROR} from './actionTypes'


export function deleteAvatar(file) {
    return (dispatch) => {
        axios.delete('http://localhost:5000/api/files/avatar', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response =>{
            const log = response.data
            dispatch({
                type: LOGIN,
                log
            })
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
import axios from 'axios';
import { LOGIN, ERROR} from './actionTypes'


export function uploadAvatar(file) {
    return (dispatch) => {
        const formData = new FormData()
        formData.append('file', file)
        axios.post('http://localhost:5000/api/files/avatar', formData, {
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
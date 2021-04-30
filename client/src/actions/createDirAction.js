import axios from 'axios';
import { ERROR} from './actionTypes'
import { addFile } from '../reducers/files';


export function createDir(dirId, name) {
    return (dispatch) => {
        axios.post(`http://localhost:5000/api/files`, {
            name,
            parent: dirId,
            type: 'dir'
        },
        {
            headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
        })
        .then(response =>{
            const data = response.data
            dispatch(addFile(data))
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
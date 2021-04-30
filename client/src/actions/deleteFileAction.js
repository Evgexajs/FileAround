import axios from 'axios';
import { ERROR, DELETE_FILE} from './actionTypes'


export function deleteFile(file) {
    return async dispatch => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/files?id=${file._id}`, {
                headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
            })
            dispatch({
                type: DELETE_FILE,
                payload: file._id
            })
            console.log(response)
            alert(response.data.message)
        } catch(e) {
            console.log(e)
            alert(e?.response?.data?.message)
        }
    };
};

/*return async dispatch => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/files?id=${file._id}`, {
            headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
        })
        dispatch({
            type: DELETE_FILE,
            payload: file._id
        })
        console.log(response)
        alert(response.data.message)
    } catch(e) {
        console.log(e)
        alert(e?.response?.data?.message)
    }
};*/
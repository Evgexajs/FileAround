import axios from 'axios';
import { setFiles } from '../reducers/files';
import { hideLoader } from '../reducers/loader';


export function searchFile(search) {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/files/search?search=${search}`, {
                headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
            })
            console.log(response)
            dispatch(setFiles(response.data))
        } catch(e) {
            console.log(e)
            alert(e?.response?.data?.message)
        } finally {
            dispatch(hideLoader())
        }
    };
};
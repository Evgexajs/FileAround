import axios from 'axios';
import { setFiles } from '../reducers/files'
import {hideLoader, showLoader} from '../reducers/loader'
import { ERROR } from './actionTypes'


export function filesData(dirId, sort) {
    return async (dispatch) => {
        dispatch(showLoader())
        let url = `http://localhost:5000/api/files`
        if (dirId) {
            url = `http://localhost:5000/api/files?parent=${dirId}`
        }
        if (sort) {
            url = `http://localhost:5000/api/files?sort=${sort}`
        }
        if (dirId && sort) {
            url = `http://localhost:5000/api/files?parent=${dirId}&sort=${sort}`
        }
        await axios.get(url, {
            headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
        })
        .then(response =>{
            const data = response.data
            dispatch(setFiles(data))
            dispatch(hideLoader())
        })
        .catch(error => {
            alert(error)
            const errors = error.message
            console.log(error)
            dispatch({
                type: ERROR,
                errors
            })
            dispatch(hideLoader())
        })
    };
};
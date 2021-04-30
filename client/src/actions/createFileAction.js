import axios from 'axios';
import { ERROR} from './actionTypes'
import { addFile } from '../reducers/files';
import { showUploader, addUploadFile, changeUploadFile } from '../reducers/upload'


export function createFile(file, dirId) {
    return (dispatch) => {
        const formData = new FormData()
        if (dirId) {
            formData.append('parent', dirId)
        }
        formData.append('file', file)
        const uploadFile = {name: file.name, progress: 0, id: Date.now()}
        dispatch(showUploader())
        dispatch(addUploadFile(uploadFile))
        axios.post(`http://localhost:5000/api/files/upload`, formData,
        {
            headers: {Authorization:`Bearer ${localStorage.getItem('token')}`},
            onUploadProgress: progressEvent => {
                const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                console.log('total', totalLength)
                if (totalLength) {
                    uploadFile.progress = Math.round((progressEvent.loaded * 100) / totalLength)
                    dispatch(changeUploadFile(uploadFile))
                }
            }
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
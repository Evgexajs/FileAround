import React from 'react';
import '../../style/style.css';
import '../../style/Files/style.css'
import UploadFile from './UploadFile.jsx';
import {useDispatch, useSelector} from 'react-redux'
import {hideUploader} from '../../reducers/upload'

function Uploader (props) {
    const files = useSelector(state => state.upload.files)
    const isVisible = useSelector(state => state.upload.isVisible)
    const dispatch = useDispatch()
    return ( isVisible &&
        <div className='uploader'>
            <div className='uploader__header'>
                <div className='uploader__title'>Загрузки</div>
                <button className='uploader__close' onClick={() => dispatch(hideUploader())}>X</button>
            </div>
            {files.map(file => <UploadFile key={file.id} file={file}/>)}
        </div>
    )
}

export default Uploader;
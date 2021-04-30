import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../style/style.css';
import '../../style/Files/style.css'
import file from '../../images/file.png'
import folder from '../../images/folder.png'
import { pushToStack, setCurrentDir } from '../../reducers/files';
import { downloadFile } from '../../actions/downloadFileAction';
import { deleteFile } from '../../actions/deleteFileAction'
import sizeFormat from '../../utils/sizeFormat'

function File (props) {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const fileView = useSelector(state => state.files.view)
    function openDirHandler(file) {
        if(file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(props.file._id))
        }
    }
    function downloadClickHandler(e) {
        e.stopPropagation()
        downloadFile(props.file)
    }
    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteFile(props.file))
    }
    
    if(fileView === 'list') {
        return (
            <div className='file'  onClick={() => openDirHandler(props.file)}>
                <img src={props.file.type === 'dir' ? folder : file} alt="" className='file__img'/>
                <div className='file__name'>{props.file.name}</div>
                <div className='file__date'>{props.file.date.slice(0, 10)}</div>
                <div className='file__size'>{ sizeFormat(props.file.size)}</div>
                <div className='file__button'>
                    {props.file.type !== 'dir' && <button onClick={(e) => downloadClickHandler(e)}>Скачать</button>}
                    <button onClick={(e) => deleteClickHandler(e)}>Удалить</button>
                </div>
            </div>
        )
    }
    if (fileView === 'tile'){        
        return (
            <div className='file-tile'  onClick={() => openDirHandler(props.file)}>
                <img src={props.file.type === 'dir' ? folder : file} alt="" className='file-tile__img'/>
                <div className='file-tile__name'>{props.file.name}</div>
                <div className='file-tile__button'>
                    {props.file.type !== 'dir' && <button onClick={(e) => downloadClickHandler(e)}>Скачать</button>}
                    <button onClick={(e) => deleteClickHandler(e)}>Удалить</button>
                </div>
            </div>
        )
    }
}

export default File;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../style/style.css';
import '../../style/Files/style.css'
import Input from '../FormControls/Input.jsx'
import { setPopupDisplay } from '../../reducers/files';
import { createDir } from '../../actions/createDirAction';

function Popup (props) {
    const [dirName, setDirName] = useState('');
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(setPopupDisplay('none'))
        dispatch(createDir(currentDir, dirName))
        setDirName('')
    }

    return (
        <div className='popup' onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className='popup__content' onClick={(event => event.stopPropagation())}>
                <div className='popup__header'>
                    <div className='popup__title'>Создать новую папку</div>
                    <button className='popup__close' onClick={() => dispatch(setPopupDisplay('none'))}>X</button>
                </div>
                <Input type="text" placeholder="Введите название папки..." value={dirName} setValue={setDirName}/>
                <button className="popup__create" onClick={() => createHandler()}>Создать</button>
            </div>
        </div>
    )
}

export default Popup;
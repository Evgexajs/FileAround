import React from 'react';
import '../style/style.css';
import '../style/Settings/style.css'
import { useDispatch } from 'react-redux'
import { deleteAvatar } from '../actions/deleteAvatar';
import { uploadAvatar } from '../actions/uploadAvata';

function Settings (props) {
    const dispatch = useDispatch()

    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
    }

    return (
        <div className='center'>
            <div className='list'>
                <div className='list__name'><h3>Настройки</h3></div>                
                <div className='list__main'>
                    <div className='settings'>
                        <div className='settings__el'>
                            <button onClick={() => dispatch(deleteAvatar())}>Удалить аватар</button>
                        </div>
                        <div className='settings__el'>
                            <div className='settings__text'>Выбрать аватар </div>
                            <input accept='image/*' onChange={(e) => changeHandler(e)} type='file'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;
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
                            <div className='settings__text'>Удалить аватар</div>
                            <button onClick={() => dispatch(deleteAvatar())} className='settings__check'>Удалить аватар</button>
                        </div>
                        <div className='settings__el'>
                            <div className='settings__text'>Загрузить аватар</div>
                            <input accept='image/*' onChange={(e) => changeHandler(e)} type='file' className='settings__check' />
                        </div>
                        <div className='settings__el'>
                            <div className='settings__text'>Настройка 2</div>
                            <div className='settings__check'>Кнопка</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;
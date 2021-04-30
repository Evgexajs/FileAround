import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../actions/logoutAction';

function Menu (props) {
    
    const isAuth = useSelector(state => state.login.isAuth)
    const dispatch = useDispatch()

    return (
            <div className='center__menu'>
                <h3>Меню</h3>
                <div className='center__change'>
                <NavLink to="/profile">Профиль</NavLink>
                <NavLink to="/messages">Сообщения</NavLink>
                <NavLink to="/main">Искать</NavLink>
                <NavLink to="/settings">Настройки</NavLink>
                {isAuth && <NavLink to="/files">Файлы</NavLink>}
                {!isAuth && <NavLink to="/registration">Регистрация</NavLink>}
                {!isAuth && <NavLink to="/login">Вход</NavLink>}
                {isAuth && <p onClick={() => dispatch(Logout())}>Выход</p>}
                </div>
            </div>
    )
}

export default Menu;
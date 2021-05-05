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
                <div className='center__change'>
                {isAuth && <NavLink to="/profile">Профиль</NavLink>}
                {isAuth && <NavLink to="/settings">Настройки</NavLink>}
                {isAuth && <NavLink to="/files">Файлы</NavLink>}
                {!isAuth && <NavLink to="/registration">Регистрация</NavLink>}
                {!isAuth && <NavLink to="/login">Вход</NavLink>}
                {isAuth && <NavLink to="/login"onClick={() => dispatch(Logout())}>Выход</NavLink>}
                </div>
            </div>
    )
}

export default Menu;
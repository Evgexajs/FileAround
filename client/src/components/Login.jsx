import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Log } from '../actions/logAction';
import '../style/Register/style.css';

function Login (props) {
  
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="form">
          <h1>Вход</h1>
            <div className='form__email'>
              <p>Email</p>
              <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="text" placeholder='Введите почту'/>
            </div>
            <div className='form__password'>
              <p>Пароль</p>
              <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder='Введите пароль'/>
            </div>
            <div>
                <NavLink to="/profile"></NavLink><button onClick={() => dispatch(Log(email, password))}>Войти</button>
            </div>
        </div>
    )
}

export default Login;
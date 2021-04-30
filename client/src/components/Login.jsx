import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
                <button onClick={() => dispatch(Log(email, password))}>Войти</button>
            </div>
        </div>
    )
}

export default Login;
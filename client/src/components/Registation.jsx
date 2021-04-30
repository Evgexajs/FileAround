import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Regist} from '../actions/registrationAction'
import '../style/Register/style.css';

function Registration (props) {
  
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="form">
          <h1>Регистрация</h1>
            <div className='form__name'>
              <p>Имя</p>
              <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder='Введите имя'/>
            </div>
            <div className='form__lastname'>
              <p>Фамилия</p>
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastname" type="text" placeholder='Введите фамилию'/>
            </div>
            <div className='form__email'>
              <p>Email</p>
              <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="text" placeholder='Введите почту'/>
            </div>
            <div className='form__password'>
              <p>Пароль</p>
              <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder='Введите пароль'/>
            </div>
            <div>
                <button onClick={() => dispatch(Regist(name, lastName, email, password))}>Зарегистрироваться</button>
            </div>
        </div>
    )
}

export default Registration;
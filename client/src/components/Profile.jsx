import React from 'react';
import '../style/style.css';
import '../style/Profile/style.css'
import { useSelector } from 'react-redux';
import avatarLogo from '../images/avatar.png'
import { API_URL } from '../config';

function Profile (props) {
    const isAuth = useSelector(state => state.login.isAuth)
    const user = useSelector(state => state.login.currentUser)
    const avatar = user.user?.avatar ? `${API_URL + user.user?.avatar}` : avatarLogo
    console.log(user)
    return (
        <div className='center'>
            <div className='list'>
                <div className='list__name'><h3>Профиль</h3></div>
                <div className='list__main'>
                    <div className='profile'>
                        <div className='profile__image'>
                            <img src={avatar} alt=""/>
                        </div>
                        <div className='profile__info'>
                        {isAuth && <div  className='profile__text'>{user.user?.name} {user.user?.lastName}</div>}
                        {isAuth && <div  className='profile__text'>{user.user?.email}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
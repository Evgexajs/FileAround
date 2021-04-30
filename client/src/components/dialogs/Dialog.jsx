import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/style.css';
import '../../style/Messages/style.css'

function Dialog (props) {
    return (
        <div className='messages__person'>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;
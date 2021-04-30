import React from 'react';
import '../../style/style.css';

const Input = (props) => {
    return (
        <input className={props.className} onChange={(event) => props.setValue(event.target.value)}
        value={props.value}
        type={props.type} 
        placeholder={props.placeholder}/>
    )
}


export default Input;
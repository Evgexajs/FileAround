import React from 'react';
import '../../style/style.css';
import '../../style/Messages/style.css'

function Message(props) {
    let your = '';
    if (props.your === 'true')
        your = '_your';
    return (
        <div className={`messages__message${your}`}>{props.message}</div>
    )
}

export default Message;
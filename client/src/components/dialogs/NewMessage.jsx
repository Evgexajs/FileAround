import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../style/style.css';
import '../../style/Messages/style.css';
import { addMessageFetchData } from '../../actions/newMessageAction';


function NewMessage (props) {
    const dispatch = useDispatch();
    let newMessage = '';
    let good = <></>;
    useEffect(() => {
        dispatch(addMessageFetchData(newMessage))
    }, []);
    const check = useSelector (state => state.messagesData)

    if (check) {
        good = (
            <div>
                <p>Message send</p>
            </div>
        )
    }

    let newMessageElement = React.createRef();

    let addMes = () => {
        newMessage = newMessageElement.current.value;
    };
    return (
        <div>
            <textarea ref={newMessageElement} className='messages__write'></textarea>
            <button onClick={addMes} className='messages__button'>Send</button>
            {good}
        </div>
    )
}

export default NewMessage;
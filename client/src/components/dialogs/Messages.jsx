import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../style/style.css';
import '../../style/Messages/style.css'
import Dialog from './Dialog.jsx'
import Message from './Message.jsx'
import NewMessage from './NewMessage.jsx'
import { messagesFetchData } from '../../actions/messagesDataAction';
import { dialogsFetchData } from '../../actions/dialogsDataAction';

function Messages (props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(messagesFetchData())
    }, []);
    useEffect(() => {
        dispatch(dialogsFetchData())
      }, []);
    const messages = useSelector (state => state.messagesData)
    const dialogs = useSelector (state => state.dialogsData)
    return (
        <div className='center'>
            <div className='list'>
                <div className='list__name'><h3>Сообщения</h3></div>
                <div className='list__main'>
                    <div className='messages'>
                        <div className='messages__left'>
                            {dialogs?.map((person) => {
                                return <Dialog key={person.id} name={person.name} id={person.id}/>
                            })}
                        </div>
                        <div className='messages__right'>
                            {messages?.map((mes) => {
                                return <Message key={mes.id} message={mes.message} your={mes.your}/>
                            })}                            
                            <NewMessage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;
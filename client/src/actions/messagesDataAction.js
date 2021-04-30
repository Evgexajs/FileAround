import { MESSAGE_DATA, ERROR } from './actionTypes';
import { DATA } from './Data';

export function messagesFetchData() {
    return (dispatch) => {
        dispatch({
            type: MESSAGE_DATA,
            messages:  DATA.messagesPage.DataMes
        });
    };
};
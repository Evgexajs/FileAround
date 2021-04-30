import { DIALOGS_DATA, ERROR } from './actionTypes';
import { DATA } from './Data';
export function dialogsFetchData() {
    return (dispatch) => {
        dispatch({
            type: DIALOGS_DATA,
            dialogs:  DATA.messagesPage.DataDialog
        });
    };
};
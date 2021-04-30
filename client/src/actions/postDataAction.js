import { POST_DATA, ERROR } from './actionTypes';
import { DATA } from './Data';

export function postsFetchData() {
    return (dispatch) => {
        dispatch({
            type: POST_DATA,
            posts: DATA.mainPage.DataPosts
        });
    };
};
import { combineReducers } from 'redux';
import { registration } from './registration';
import { error } from './error'
import { login } from './log';
import { files } from './files';
import { upload } from './upload';
import { loader } from './loader';

export default combineReducers({
    registration: registration,
    error: error,
    login: login,
    files: files,
    upload: upload,
    loader: loader,
});
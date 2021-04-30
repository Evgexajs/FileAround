import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux";
import  reducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
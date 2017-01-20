/**
 * Created by bruce on 2017/1/20.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';
import App from './containers/App';
import './App.css';

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
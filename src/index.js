/**
 * Created by bruce on 2017/1/20.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import  createLogger from 'redux-logger';
import todoApp from './reducers';
import App from './containers/App';
import './App.css';

const middlewares = [];

middlewares.push(createLogger());

let store = createStore(todoApp, applyMiddleware(...middlewares));

ReactDOM.render(
    <Provider store={store}>
        <App visibleTodos="" visibilityFilter=""/>
    </Provider>,
    document.getElementById('root')
);
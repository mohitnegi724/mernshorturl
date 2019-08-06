import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RootReducer from './Reducer/Index';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import './index.css';

const store = createStore(RootReducer, applyMiddleware(Thunk));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

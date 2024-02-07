// 引入react核心库
import React from 'react';
// 引入react-dom
import ReactDOM from 'react-dom';
// 最外壳组件App
import App from './App';
// 通过Provider全局提供store
import store from './redux//store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// 引入react核心库
import React from 'react';
// 引入react-dom
import ReactDOM from 'react-dom';
// 最外壳组件App
import App from './App';
import store from './redux/store';

ReactDOM.render(<App />, document.getElementById('root'));

// 检测redux中状态改变，若发生改变，重新渲染App组件
store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});

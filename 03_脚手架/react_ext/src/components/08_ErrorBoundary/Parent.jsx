import React, { Component } from 'react';
import Child from './Child';
import './index.css';

export default class Parent extends Component {
    state = {
        hasError: null
    };

    // 当子组件报错，会调用这里，并携带错误信息
    static getDerivedStateFromError(error) {
        console.log('出错啦', error);
        return { hasError: error };
    }
    // 组件出错调用
    componentDidCatch() {
        console.log('渲染组件出错！');
    }
    render() {
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                {this.state.hasError ? <h3>当前网络不稳定哦！</h3> : <Child />}
            </div>
        );
    }
}

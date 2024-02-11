import React, { Component } from 'react';
import './index.css';

// 创建Context对象
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;
export default class A extends Component {
    state = {
        userName: 'jerry',
        age: 1000
    };

    render() {
        const { userName, age } = this.state;
        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h4>我的用户名为：{userName}</h4>
                <Provider value={{ userName: userName, age: age }}>
                    <B />
                </Provider>
                {/* <B userName={userName} /> */}
            </div>
        );
    }
}

class B extends Component {
    render() {
        console.log('b:', this.context);
        return (
            <div className="child">
                <h3>我是B组件</h3>
                <h4>我从A组件接收到用户名为:{this.props.userName}</h4>
                <C userName={this.props.userName} />
            </div>
        );
    }
}

/* class C extends Component {
    static contextType = MyContext;
    render() {
        console.log('c:', this.context);
        return (
            <div className="grad">
                <h3>我是C组件</h3>
                <h4> 
                    我从B组件接收到用户名为:{this.context.userName},年龄：{this.context.age}
                </h4>
            </div>
        );
    }
} */

function C() {
    return (
        <div className="grand">
            <h3>我是C组件</h3>
            <h4>
                我从B组件接收到用户名为:
                <Consumer>{value => `${value.userName},年龄：${value.age}`}</Consumer>
            </h4>
        </div>
    );
}

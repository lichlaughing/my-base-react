import React, { Component } from 'react';

export default class Demo extends Component {
    state = {
        count: 0
    };
    add = () => {
        const { count } = this.state;
        this.setState({ count: count + 1 }, () => {
            console.log('状态更新为：', this.state.count);
        });
    };
    add2 = () => {
        this.setState((state, props) => {
            return { count: state.count + 1 };
        });
    };
    render() {
        return (
            <div style={{ marginLeft: '30%' }}>
                <h2>当前求和为:{this.state.count}</h2>
                <button onClick={this.add}>+1(对象式)</button>
                <button onClick={this.add2}>+1(函数式)</button>
            </div>
        );
    }
}

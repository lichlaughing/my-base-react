import React, { Component } from 'react';

export default class Count extends Component {
    state = {
        count: 0
    };
    // 加
    increment = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        this.setState({ count: count + value * 1 });
    };
    // 减
    decrement = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        this.setState({ count: count - value * 1 });
    };
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        if (count % 2 !== 0) {
            this.setState({ count: count + value * 1 });
        }
    };
    // 异步加
    incrementAsync = () => {
        setTimeout(() => {
            const { value } = this.selectNumber;
            const { count } = this.state;
            this.setState({ count: count + value * 1 });
        }, 500);
    };
    render() {
        const { count } = this.state;
        return (
            <div style={{ marginLeft: '30%' }}>
                <h2>当前求和为:{count} </h2>
                <select ref={c => (this.selectNumber = c)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;&nbsp;
                <button onClick={this.increment}>+</button> &nbsp;&nbsp;
                <button onClick={this.decrement}>-</button> &nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>奇数+(当前和为奇数)</button> &nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步+</button>
            </div>
        );
    }
}

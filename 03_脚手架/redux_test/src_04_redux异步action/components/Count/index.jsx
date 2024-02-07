import React, { Component } from 'react';
// 引入store用于获取状态
import store from '../../redux/store';
// 引入action对象
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action';

export default class Count extends Component {
    state = {
        myCar: 'AE86'
    };
    /*  componentDidMount() {
        // 检测store中状态的变化，只要变化就重新render
        store.subscribe(() => {
            this.setState({});
        });
    } */
    // 加
    increment = () => {
        const { value } = this.selectNumber;
        store.dispatch(createIncrementAction(value * 1));
    };
    // 减
    decrement = () => {
        const { value } = this.selectNumber;
        store.dispatch(createDecrementAction(value * 1));
    };
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber;
        const count = store.getState();
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1));
        }
    };
    // 异步加
    incrementAsync = () => {
        /*         setTimeout(() => {
            const { value } = this.selectNumber;
            store.dispatch(createIncremAction(value * 1));
        }, 500); */
        // 异步action
        const { value } = this.selectNumber;
        store.dispatch(createIncrementAsyncAction(value * 1, 500));
    };
    render() {
        return (
            <div style={{ marginLeft: '30%' }}>
                <h2>当前求和为:{store.getState()} </h2>
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

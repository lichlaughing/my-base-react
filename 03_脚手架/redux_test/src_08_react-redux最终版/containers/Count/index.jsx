import React, { Component } from 'react';
// 引入action
import { increment, decrement, incrementAsync } from '../../redux/actions/count';
// 引入Connect用于链接ui和redux
import { connect } from 'react-redux';

// 定义UI组件
class Count extends Component {
    state = {
        myCar: 'AE86'
    };
    // 加
    increment = () => {
        const { value } = this.selectNumber;
        this.props.increment(value * 1);
    };
    // 减
    decrement = () => {
        const { value } = this.selectNumber;
        this.props.decrement(value * 1);
    };
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber;
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1);
        }
    };
    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber;
        this.props.incrementAsync(value * 1, 1000);
    };
    render() {
        const { count } = this.props;
        return (
            <div style={{ marginLeft: '30%' }}>
                <h3>我是Count组件</h3>
                <h4>人员列表为：</h4>
                <ul>
                    {this.props.personArr.map(personObj => {
                        return (
                            <li key={personObj.id}>
                                名字：{personObj.name}-age:{personObj.age}
                            </li>
                        );
                    })}
                </ul>
                <h4>当前求和为:{count} </h4>
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

// 使用connect创建并暴露一个Count容器组件
export default connect(
    state => ({ count: state.count, personArr: state.person }),
    // 精简写法。自动调用dispatch
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count);

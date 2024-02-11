import React, { Component, PureComponent } from 'react';
import './index.css';

export default class Parent extends PureComponent {
    state = {
        carName: '奔驰G63'
    };
    changeCar = () => {
        this.setState({ carName: '奥拓' });
        // this.setState({});

        /* 修改原对象，不会触发render 
        const obj = this.state;
        obj.carName = '123';
        this.setState(obj); */
    };
    /* shouldComponentUpdate(nextProps, nextState) {
        console.log('当前', this.props, this.state);
        console.log('变成', nextProps, nextState);
        return !(this.state.carName === nextState.carName);
    } */
    render() {
        console.log('Parent--render');
        const { carName } = this.state;
        return (
            <div className="parent">
                <h3>我是父组件</h3>
                <span>我的车是:{carName}</span>
                <br />
                <button onClick={this.changeCar}>换车</button>
                <Child carName={carName} />
            </div>
        );
    }
}

class Child extends PureComponent {
    /* shouldComponentUpdate(nextProps, nextState) {
        console.log('child当前', this.props, this.state);
        console.log('child变成', nextProps, nextState);
        return this.props.carName !== nextProps.carName;
    } */
    render() {
        console.log('Child--render');
        return (
            <div className="child">
                <h3>我是子组件</h3>
                <span>接收的车:{this.props.carName}</span>
            </div>
        );
    }
}

import React, { Component } from 'react';
import './index.css';

export default class Child extends Component {
    /* state = {
        userList: [
            { name: 'jerry', age: 18 },
            { name: 'herry', age: 28 }
        ]
    }; */
    state = {
        userList: '123'
    };
    render() {
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <h4>用户列表</h4>
                {this.state.userList.map(userObj => {
                    return (
                        <li key={userObj.name}>
                            {userObj.name}--{userObj.age}
                        </li>
                    );
                })}
            </div>
        );
    }
}

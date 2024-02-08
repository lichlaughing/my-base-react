import React, { Component } from 'react';
// 引入Count容器组件
import Count from './containers/Count';
// 引入Person容器组件
import Person from './containers/Person';
export default class App extends Component {
    render() {
        return (
            <div>
                <Count />
                <hr />
                <Person />
            </div>
        );
    }
}

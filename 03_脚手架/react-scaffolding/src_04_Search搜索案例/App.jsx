import React, {Component} from 'react';
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
    state = {
        users: [], //用户列表
        isFirst: true, //是否为第一次打开页面
        isLoading: false,//加载数据中
        err: '' // error msg
    }

    // 更新app state
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div id="app">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        );
    }
}
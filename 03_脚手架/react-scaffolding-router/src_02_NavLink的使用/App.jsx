import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom'
import Home from "./pages/Home"; // 引入路由组件
import About from "./pages/About"; // 引入路由组件
import Header from "./components/Header"; // 引入一般组件

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生通过a标签跳转不同的页面
                                 <a className="list-group-item active" href="./home.html">Home</a>
                                 <a className="list-group-item" href="./about.html">About</a>
                            */}
                            {/*React中靠路由链接实现切换组件*/}
                            <NavLink activeClassName="myActive" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="myActive" className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
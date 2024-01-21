import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import MyNavLink from "./components/MyNavLink";
import Home from "./pages/Home"; // 引入路由组件
import About from "./pages/About"; // 引入路由组件
import Test from "./pages/Test"
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
                            <MyNavLink to="/a/about" title="About">About</MyNavLink>
                            <MyNavLink to="/a/home" title="Home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/a/about" component={About}/>
                                    <Route path="/a/home" component={Home}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }
}